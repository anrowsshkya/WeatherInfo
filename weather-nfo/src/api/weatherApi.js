// // src/api/weatherApi.js
// // Later we will use this to fetch data from OpenWeather API

// export default async function fetchWeather(city) {
//     const apiKey = "YOUR_API_KEY";
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

//     const response = await fetch(url);
//     if (!response.ok) throw new Error("Failed to fetch weather data");
//     const data = await response.json();

//     return {
//         city: data.name,
//         temperature: data.main.temp,
//     };
// }
