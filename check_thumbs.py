import urllib.request
import re

with open("src/data/sermons.ts", "r") as f:
    content = f.read()

ids = re.findall(r'youtubeId:\s*"([^"]+)"', content)

for yid in ids:
    url = f"https://img.youtube.com/vi/{yid}/maxresdefault.jpg"
    try:
        req = urllib.request.Request(url, method='HEAD')
        res = urllib.request.urlopen(req)
        print(f"{yid}: {res.status}")
    except Exception as e:
        print(f"{yid}: {e}")
