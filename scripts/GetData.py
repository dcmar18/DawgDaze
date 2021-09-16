import requests

url = 'https://www.uwdawgdaze.com/all-autumn-events/'

r = requests.get(url)

print(r.content[:500])
