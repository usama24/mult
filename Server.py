import urllib.request
from io import StringIO
import json

url = "https://upload24.herokuapp.com/api/upload"

# Send HTTP POST request
with urllib.request.urlopen(url) as response:
    html = response.read()
    a=json.loads(html)
    dictionary=dict(a[0])
    path = dictionary['name']
    print (path)
    path_save = "a.jpg"
    urllib.request.urlretrieve(path, path_save)