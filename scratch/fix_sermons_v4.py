import re
import os

file_path = r'c:\Users\trium\ELGCC\app\teachings\page.tsx'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

match = re.search(r'const sermons: Sermon\[\] = \[(.*?)\]', content, re.DOTALL | re.MULTILINE)
if not match:
    print("Could not find sermons array")
    exit(1)

array_content = match.group(1)

from collections import defaultdict
series_groups = defaultdict(list)

sermon_regex = re.compile(r'\{(?:[^{}]|\{.*?\})*\}', re.DOTALL)
sermon_objects = sermon_regex.findall(array_content)

for obj_str in sermon_objects:
    title_match = re.search(r'title:\s*"([^"]+)"', obj_str)
    series_match = re.search(r'series:\s*"([^"]+)"', obj_str)
    
    if title_match and series_match:
        title = title_match.group(1)
        series = series_match.group(1)
        series_groups[series].append((title, obj_str))

replacements = {}

for series, sermons in series_groups.items():
    # If the series has other tracks (Track 2, 3, etc.)
    has_other_tracks = any(re.search(r'Track\s*[2-9]\b|Track\s*\d\d+', title, re.IGNORECASE) for title, _ in sermons)
    has_track_1 = any(re.search(r'Track\s*0?1\b', title, re.IGNORECASE) for title, _ in sermons)
    
    if has_other_tracks and not has_track_1:
        # Candidate for Track 1: Sermons without a track number
        candidates = []
        for title, obj_str in sermons:
            if not re.search(r'Track\s*\d+', title, re.IGNORECASE):
                candidates.append((title, obj_str))
        
        # If there's exactly one candidate, or we can pick the best one
        if candidates:
            # If multiple candidates, pick the first one (usually the case)
            title, obj_str = candidates[0]
            new_title = f"{title} Track 1"
            new_obj_str = obj_str.replace(f'title: "{title}"', f'title: "{new_title}"')
            replacements[obj_str] = new_obj_str
            print(f"Series: {series} | Renaming '{title}' -> '{new_title}'")

# Apply replacements to the content
new_content = content
for old, new in replacements.items():
    new_content = new_content.replace(old, new)

# Write back to check
with open(r'c:\Users\trium\ELGCC\scratch\fixed_page_v4.tsx', 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Total replacements made: {len(replacements)}")
