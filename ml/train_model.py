import pandas as pd
import joblib

from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score


# Load dataset
df = pd.read_csv("city_day_aqi.csv")

print("Original dataset shape:", df.shape)


# These are the pollutants available from OpenWeather
features = [
    "PM2.5",
    "PM10",
    "NO",
    "NO2",
    "NH3",
    "CO",
    "SO2",
    "O3"
]

target = "AQI"


# Select required columns
data = df[features + [target]].copy()


# Remove rows where AQI is missing
data = data.dropna(subset=[target])


# Fill missing pollutant values with median
for column in features:
    data[column] = data[column].fillna(data[column].median())


print("Cleaned dataset shape:", data.shape)


# Input and output
X = data[features]
y = data[target]


# Split dataset
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)


print("\nTraining rows:", len(X_train))
print("Testing rows:", len(X_test))


# Create model
model = RandomForestRegressor(
    n_estimators=100,
    random_state=42,
    n_jobs=-1
)


# Train
print("\nTraining model...")
model.fit(X_train, y_train)

print("Training completed!")


# Predictions
y_pred = model.predict(X_test)


# Evaluation
mae = mean_absolute_error(y_test, y_pred)
mse = mean_squared_error(y_test, y_pred)
rmse = mse ** 0.5
r2 = r2_score(y_test, y_pred)


print("\n----- MODEL PERFORMANCE -----")
print("MAE :", mae)
print("RMSE:", rmse)
print("R²  :", r2)


# Save model
joblib.dump(model, "model_8features.pkl")

print("\nModel saved successfully as model_8features.pkl")