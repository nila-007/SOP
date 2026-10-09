from flask import Flask, jsonify, request
from flask_cors import CORS
import joblib

app = Flask(__name__)

CORS(app)

# Load the new 8-feature ML model
model = joblib.load("model_8features.pkl")


@app.route("/")
def home():
    return jsonify({
        "message": "Air Quality Predictor Backend is running!"
    })


@app.route("/predict", methods=["POST"])
def predict():

    data = request.get_json()

    features = [[
        data["PM2.5"],
        data["PM10"],
        data["NO"],
        data["NO2"],
        data["NH3"],
        data["CO"],
        data["SO2"],
        data["O3"]
    ]]

    prediction = model.predict(features)

    predicted_aqi = prediction[0]

    return jsonify({
        "predicted_aqi": round(float(predicted_aqi), 2)
    })


if __name__ == "__main__":
    app.run(debug=True)