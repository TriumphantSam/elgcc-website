const fs = require('fs');
const path = require('path');

const root = process.cwd();
const sermonsPath = path.join(root, 'content', 'teachings', 'sermons.json');

function normalize(value) {
  return String(value || '').trim().replace(/\s+/g, ' ');
}

function archiveFileName(audioUrl) {
  try {
    const url = new URL(audioUrl);
    const parts = url.pathname.split('/').filter(Boolean);
    const downloadIndex = parts.indexOf('download');

    if (downloadIndex === -1 || !parts[downloadIndex + 2]) {
      return '';
    }

    return decodeURIComponent(parts.slice(downloadIndex + 2).join('/')).toLowerCase();
  } catch {
    return '';
  }
}

function validate() {
  if (!fs.existsSync(sermonsPath)) {
    throw new Error(`Missing sermon data file: ${sermonsPath}`);
  }

  const sermons = JSON.parse(fs.readFileSync(sermonsPath, 'utf8'));

  if (!Array.isArray(sermons)) {
    throw new Error('Sermon data must be a JSON array.');
  }

  const errors = [];
  const warnings = [];
  const ids = new Map();
  const teachings = new Map();
  const audioUrls = new Map();
  const archiveFiles = new Map();

  sermons.forEach((sermon, index) => {
    const label = `Record ${index + 1}`;
    const id = normalize(sermon.id);
    const title = normalize(sermon.title);
    const series = normalize(sermon.series);
    const audioUrl = normalize(sermon.audioUrl);
    const year = Number(sermon.year);

    if (!id) errors.push(`${label}: id is required.`);
    if (!title) errors.push(`${label}: title is required.`);
    if (!series) errors.push(`${label}: series is required.`);
    if (!Number.isInteger(year) || year < 1900 || year > 2200) {
      errors.push(`${label}: year must be a valid four-digit year.`);
    }

    try {
      const url = new URL(audioUrl);
      const isArchiveAudio =
        url.hostname === 'archive.org' &&
        url.pathname.includes('/download/') &&
        /\.(mp3|m4a)$/i.test(url.pathname);

      if (!isArchiveAudio) {
        errors.push(`${label}: audioUrl must be an Archive.org .mp3 or .m4a download link.`);
      }
    } catch {
      errors.push(`${label}: audioUrl must be a valid URL.`);
    }

    const teachingKey = `${year}|${series.toLowerCase()}|${title.toLowerCase()}`;
    const audioKey = audioUrl.toLowerCase();
    const archiveKey = archiveFileName(audioUrl);

    for (const [map, key, description] of [
      [ids, id, 'id'],
      [audioUrls, audioKey, 'audioUrl'],
      [archiveFiles, archiveKey, 'archive filename'],
    ]) {
      if (!key) continue;
      if (map.has(key)) {
        errors.push(`${label}: duplicate ${description} also appears at record ${map.get(key)}.`);
      } else {
        map.set(key, index + 1);
      }
    }

    if (teachings.has(teachingKey)) {
      warnings.push(`${label}: duplicate year + series + title also appears at record ${teachings.get(teachingKey)}.`);
    } else {
      teachings.set(teachingKey, index + 1);
    }
  });

  if (errors.length > 0) {
    throw new Error(errors.join('\n'));
  }

  if (warnings.length > 0) {
    console.warn(`Teaching data warnings:\n${warnings.join('\n')}`);
  }

  console.log(`Teaching data OK: ${sermons.length} sermons checked.`);
}

try {
  validate();
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
