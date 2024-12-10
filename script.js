async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '988fd62eb176541985e9bb506e99d385'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
function displayWeather(data) {
    const weatherDiv = document.getElementById('weather');
    if (data.cod === 200) {
        weatherDiv.innerHTML = `
            <h2>${data.name}</h2>
            <p>${data.weather[0].description}</p>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>;
    } else {
        weatherDiv.innerHTML = `<p>City not found. Please try again.</p>`;
    }
}
