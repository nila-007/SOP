import requests

url = "http://127.0.0.1:5000/predict"

data = {
    "PM2.5": 83.13,
    "PM10": 96.18,
    "NO": 6.93,
    "NO2": 28.71,
    "NH3": 10.0,
    "CO": 0.5,
    "SO2": 15.0,
    "O3": 50.0
}

response = requests.post(url, json=data)

print("Status code:", response.status_code)
print("Response:", response.json())