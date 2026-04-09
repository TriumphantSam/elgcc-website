import re
import os

file_path = r'c:\Users\trium\ELGCC\app\teachings\page.tsx'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Regular expression to match the sermons array content
match = re.search(r'const sermons: Sermon\[\] = \[(.*?)\];$', content, re.DOTALL | re.MULTILINE)
if not match:
    # Try another search if the ; is missing or formatted differently
    match = re.search(r'const sermons: Sermon\[\] = \[(.*?)\]', content, re.DOTALL | re.MULTILINE)
    if not match:
        print("Could not find sermons array")
        exit(1)

array_content = match.group(1)

# Group sermons by series
from collections import defaultdict
series_groups = defaultdict(list)

# flexible regex for sermon objects
sermon_regex = re.compile(r'\{(?:[^{}]|\{.*?\})*\}', re.DOTALL)
sermon_objects = sermon_regex.findall(array_content)

for obj_str in sermon_objects:
    title_match = re.search(r'title:\s*"([^"]+)"', obj_str)
    series_match = re.search(r'series:\s*"([^"]+)"', obj_str)
    
    if title_match and series_match:
        title = title_match.group(1)
        series = series_match.group(1)
        series_groups[series].append((title, obj_str))

# Find series with more than 1 track and identify "Track 1" that needs renaming
replacements = {}

for series, sermons in series_groups.items():
    if len(sermons) > 1:
        # Check if any track is explicitly "Track 1"
        has_track_1 = any(re.search(r'Track\s*0?1\b', title, re.IGNORECASE) for title, _ in sermons)
        # Check if there are other tracks (Track 2, 3, etc.)
        has_other_tracks = any(re.search(r'Track\s*[2-9]\b|Track\s*\d\d+', title, re.IGNORECASE) for title, _ in sermons)
        
        if not has_track_1 and has_other_tracks:
            # Look for the one that should be Track 1 (usually the one without "Track" in it)
            # OR the first one in the list.
            for title, obj_str in sermons:
                if not re.search(r'Track\s*\d+', title, re.IGNORECASE):
                    new_title = f"{title} Track 1"
                    new_obj_str = obj_str.replace(f'title: "{title}"', f'title: "{new_title}"')
                    replacements[obj_str] = new_obj_str
                    print(f"Series: {series} | Renaming '{title}' -> '{new_title}'")
                    break

# Apply replacements to the content
new_content = content
for old, new in replacements.items():
    new_content = new_content.replace(old, new)

# Write back to check
with open(r'c:\Users\trium\ELGCC\scratch\fixed_page_v2.tsx', 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Total replacements made: {len(replacements)}")
