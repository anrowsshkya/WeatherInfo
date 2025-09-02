// src/components/WeatherCard.jsx
import React from "react";
import "./WeatherCard.css";

export default function WeatherCard({ city, temperature, humidity, condition, icon }) {
    return (
        <div className="weather-card">
            <h2>{city}</h2>
            <p>{temperature}°C</p>
            <p>{condition}</p>
            <p>Humidity: {humidity}%</p>
            {icon && <img src={icon} alt={condition} />}
        </div>
    );
}
