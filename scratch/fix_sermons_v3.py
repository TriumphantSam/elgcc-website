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

# Group sermons by series
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
    # To identify "Track 1" candidates:
    # We look for a sermon A and another sermon B in the same series where:
    # A.title is a prefix of B.title (or vice versa before "Track")
    # AND B.title contains "Track X" where X > 1.
    
    for i, (title_a, obj_a) in enumerate(sermons):
        # Skip if title_a already has "Track"
        if re.search(r'Track\s*\d+', title_a, re.IGNORECASE):
            continue
            
        # Look for a "Track X" counterpart
        # We clean the title a bit (remove trailing spaces/punctuation)
        base_a = title_a.strip().rstrip('.,- ')
        
        found_counterpart = False
        for j, (title_b, obj_b) in enumerate(sermons):
            if i == j: continue
            
            # Does title_b contain base_a followed by "Track X"?
            # Or is title_b just "base_a Track X"?
            # Regex: base_a + optional separator + Track + space + number
            escaped_base = re.escape(base_a)
            pattern = rf'{escaped_base}.*?Track\s*[2-9]\b'
            
            if re.search(pattern, title_b, re.IGNORECASE):
                found_counterpart = True
                break
        
        if found_counterpart:
            # Check if there's already a "Track 1" for this base
            has_track_1 = any(re.search(rf'{re.escape(base_a)}.*?Track\s*0?1\b', t, re.IGNORECASE) for t, _ in sermons)
            
            if not has_track_1:
                new_title = f"{title_a} Track 1"
                new_obj_str = obj_a.replace(f'title: "{title_a}"', f'title: "{new_title}"')
                replacements[obj_a] = new_obj_str
                print(f"Series: {series} | Renaming '{title_a}' -> '{new_title}'")

# Apply replacements to the content
new_content = content
for old, new in replacements.items():
    new_content = new_content.replace(old, new)

# Write back to check
with open(r'c:\Users\trium\ELGCC\scratch\fixed_page_v3.tsx', 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Total replacements made: {len(replacements)}")
