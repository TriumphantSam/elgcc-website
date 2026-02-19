import re
import sys
import os

def process_file(year):
    input_file = fr"C:\Sermons\{year}\sermon-metadata-{year}.txt"
    output_file = fr"C:\Users\trium\ELGCC\formatted_{year}.txt"
    
    if not os.path.exists(input_file):
        print(f"Error: Input file {input_file} not found.")
        return

    print(f"Processing {input_file} -> {output_file}")

    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex to find each object
    pattern = r'{\s*title:\s*"(.*?)",\s*audioUrl:\s*"(.*?)",\s*series:\s*"(.*?)",\s*year:\s*(\d+),\s*speaker:\s*"(.*?)"\s*}'
    matches = re.findall(pattern, content, re.DOTALL)
    
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(f"    // {year} Sermons\n")
        unique_series = set()
        for match in matches:
            title = match[0].strip()
            audioUrl = match[1].strip()
            series = match[2].strip()
            year_val = match[3].strip()
            speaker = match[4].strip()
            
            # Clean up whitespace
            title = " ".join(title.split())
            series = " ".join(series.split())
            speaker = " ".join(speaker.split())
            
            unique_series.add(series)

            line = f'    {{ title: "{title}", audioUrl: "{audioUrl}", series: "{series}", year: {year_val}, speaker: "{speaker}" }},\n'
            f.write(line)
            
    print(f"Found {len(matches)} sermons.")
    print(f"Found {len(unique_series)} unique series:")
    for s in sorted(unique_series):
        print(f"- {s}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python format_metadata_generic.py <year>")
    else:
        process_file(sys.argv[1])
