
import re

with open('formatted_2021.txt', 'r', encoding='utf-8') as f:
    content = f.read()

# Regex to find series: "series": "Series Name"
series_list = re.findall(r'series: "([^"]+)"', content)
unique_series = sorted(list(set(series_list)))

print("Unique Series in 2021:")
for series in unique_series:
    print(series)
