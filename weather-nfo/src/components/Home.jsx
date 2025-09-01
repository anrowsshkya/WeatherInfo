// src/components/Home.jsx
import React, { useState } from "react";
import WeatherCard from "./WeatherCard";
import "./Home.css";
// import fetchWeather from "../api/weatherApi"; //when API ready

export default function Home() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);

    const handleFetchWeather = async () => {
        // Placeholder data for now
        setWeather({
            city: city || "Kathmandu",
            temperature: 25,
        });

        // Later replace with API call
        // const data = await fetchWeather(city);
        // setWeather(data);
    };

    return (
        <div className="home-container">
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

            {weather && <WeatherCard city={weather.city} temperature={weather.temperature} />}
        </div>
    );
}
