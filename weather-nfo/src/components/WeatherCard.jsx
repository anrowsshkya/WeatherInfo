import React from "react";
import "./WeatherCard.css";

export default function WeatherCard({ city, temperature, condition, humidity, icon }) {
    return (
        <div className="weather-card">
            <h2>{city}</h2>
            <img src={icon} alt={condition} />
            <p>Temperature: {temperature}°C</p>
            <p>Condition: {condition}</p>
            <p>Humidity: {humidity}%</p>
        </div>
    );
}
