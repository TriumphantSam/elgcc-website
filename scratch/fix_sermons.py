import re
import os

file_path = r'c:\Users\trium\ELGCC\app\teachings\page.tsx'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Regular expression to match sermon objects
# { title: "...", audioUrl: "...", series: "...", year: ... , speaker: "..." }
# Note: some are multi-line, some are single-line.
sermon_pattern = re.compile(r'\{\s*title:\s*"([^"]+)",\s*audioUrl:\s*"([^"]+)",\s*series:\s*"([^"]+)",\s*year:\s*(\d+)(?:,\s*speaker:\s*"([^"]+)")?\s*\}', re.MULTILINE)

# I will also match objects that have other fields or different formatting
# To be safer, I'll extract the sermons array content and then process it.

# Find the start and end of the sermons array
match = re.search(r'const sermons: Sermon\[\] = \[(.*?)\];$', content, re.DOTALL | re.MULTILINE)
if not match:
    print("Could not find sermons array")
    exit(1)

array_content = match.group(1)

# Group sermons by series
from collections import defaultdict
series_groups = defaultdict(list)

# More flexible regex for sermon objects
sermon_regex = re.compile(r'\{(?:[^{}]|\{.*?\})*\}', re.DOTALL)
sermon_objects = sermon_regex.findall(array_content)

processed_sermons = []
for obj_str in sermon_objects:
    # Extract title and series
    title_match = re.search(r'title:\s*"([^"]+)"', obj_str)
    series_match = re.search(r'series:\s*"([^"]+)"', obj_str)
    
    if title_match and series_match:
        title = title_match.group(1)
        series = series_match.group(1)
        processed_sermons.append({
            'original': obj_str,
            'title': title,
            'series': series
        })
        series_groups[series].append((title, obj_str))

# Find series with more than 1 track and identify "Track 1" that needs renaming
replacements = {}

for series, sermons in series_groups.items():
    if len(sermons) > 1:
        # Check if any track is explicitly "Track 1" or "Track 01"
        has_track_1 = any(re.search(r'Track\s*0?1\b', title, re.IGNORECASE) for title, _ in sermons)
        
        if not has_track_1:
            # Look for the one that matches the series name or doesn't have a track number
            # Usually it's the first one in the list that doesn't have "Track" in it
            for title, obj_str in sermons:
                if "Track" not in title:
                    new_title = f"{title} Track 1"
                    new_obj_str = obj_str.replace(f'title: "{title}"', f'title: "{new_title}"')
                    replacements[obj_str] = new_obj_str
                    print(f"Series: {series} | Renaming '{title}' -> '{new_title}'")
                    break

# Special case for "Miracles in your Mouth" as requested
# It might already have a Track 2, 3, etc. but the first one is just the title.
# My logic above should cover it.

# Apply replacements to the content
new_content = content
for old, new in replacements.items():
    new_content = new_content.replace(old, new)

# Write back to check
with open(r'c:\Users\trium\ELGCC\scratch\fixed_page.tsx', 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Total replacements made: {len(replacements)}")
