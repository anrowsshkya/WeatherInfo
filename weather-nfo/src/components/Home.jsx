// src/components/Home.jsx
import React, { useState } from "react";
import WeatherCard from "./WeatherCard";
// import fetchWeather from "../api/weatherApi"; // Uncomment when API ready
import "./Home.css";

export default function Home() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState("");

    // Background class based on weather condition
    const getBackgroundClass = (condition) => {
        switch (condition?.toLowerCase()) {
            case "rain":
                return "bg-rain";
            case "clouds":
                return "bg-clouds";
            case "clear":
                return "bg-clear";
            default:
                return "bg-default";
        }
    };

    const handleFetchWeather = async () => {
        try {
            // Dummy data for now
            setWeather({
                city: city || "Kathmandu",
                temperature: 25,
                humidity: 70,
                condition: "Rain", // change to "Clear" or "Clouds" to test other backgrounds
                icon: "/assets/images/rain-icon.png", // local icon for now
            });
            setError("");

            // Uncomment below when API is ready
            // const data = await fetchWeather(city || "Kathmandu");
            // setWeather(data);
            // setError("");
        } catch (err) {
            setError("City not found. Try again.");
            setWeather(null);
        }
    };

    return (
        <div className={`home-container ${getBackgroundClass(weather?.condition)}`}>
            <input
                type="text"
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="city-input"
            />
            <button onClick={handleFetchWeather} className="fetch-button">
                Get Weather
            </button>

            {error && <p className="error">{error}</p>}
            {weather && <WeatherCard {...weather} />}
        </div>
    );
}
