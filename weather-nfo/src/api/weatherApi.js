const API_KEY = "bf6f89b109eb7d48abbc8a52c132cf5e";

export default async function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        console.log("API response:", data);


        return {
            city: data.name,
            temperature: data.main.temp,
            condition: data.weather[0].main,
            humidity: data.main.humidity,
            icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        };
    } catch (error) {
        throw error;
    }
}
