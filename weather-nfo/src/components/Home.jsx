import React, { useState } from "react";
import fetchWeather from "../api/weatherApi";
import WeatherCard from "./WeatherCard";
import "../App.css";

export default function Home() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState("");

    const handleSearch = async () => {
        try {
            const result = await fetchWeather(city);
            setWeather(result);
            setError("");
        } catch (err) {
            setError("City not found. Please try again.");
            setWeather(null);
        }
    };

    return (
        <div className="home-container">
            <h1>Weather Dashboard</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>

            {error && <p className="error">{error}</p>}
            {weather && (
                <WeatherCard
                    city={weather.city}
                    temperature={weather.temperature}
                    condition={weather.condition}
                    humidity={weather.humidity}
                    icon={weather.icon}
                />
            )}
        </div>
    );
}
