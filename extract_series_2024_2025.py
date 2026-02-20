import re

with open(r"C:\Sermons\2024\sermon-metadata-2024.txt", "r", encoding="utf-8") as f:
    data_2024 = f.read()
series_2024 = sorted(list(set(re.findall(r'series:\s*"(.*?)",', data_2024))))

with open(r"C:\Sermons\2025\sermon-metadata-2025.txt", "r", encoding="utf-8") as f:
    data_2025 = f.read()
series_2025 = sorted(list(set(re.findall(r'series:\s*"(.*?)",', data_2025))))

print("2024 Series:")
for s in series_2024: print("- " + s)
print("\n2025 Series:")
for s in series_2025: print("- " + s)
