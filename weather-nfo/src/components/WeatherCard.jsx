// src/components/WeatherCard.jsx
import React from "react";
import "./WeatherCard.css";

export default function WeatherCard({ city, temperature }) {
    return (
        <div className="weather-card">
            <h2>{city}</h2>
            <p>{temperature}°C</p>
        </div>
    );
}
