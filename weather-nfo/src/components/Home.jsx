import React, { useState } from "react";
import fetchWeather from "../api/weatherApi";
import WeatherCard from "./WeatherCard";
import "../App.css";
import "./Home.css";

import sunnyBackground from "../assets/images/sunny.jpg";
import rainyBackground from "../assets/images/rain.webp";
import cloudyBackground from "../assets/images/cloudy.jpg";
import defaultBackground from "../assets/images/default.jpg";

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
            setError("City is not found. Please try again.");
            setWeather(null);
        }
    };

    const getBackgroundImage = (condition) => {
        if (!condition) return defaultBackground;
        switch (condition.toLowerCase()) {
            case "clear":
                return sunnyBackground;
            case "rain":
            case "drizzle":
                return rainyBackground;
            case "clouds":
                return cloudyBackground;
            default:
                return defaultBackground;
        }
    };

    return (
        <div
            className="home-container"
            style={{
                backgroundImage: `url(${getBackgroundImage(weather?.condition)})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100vh",
                width: "100%",
                transition: "background 0.5s ease-in-out",
            }}
        >
            <h1>WeatherInfo</h1>
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
