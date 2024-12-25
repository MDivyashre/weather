const apiKey = 'YOUR_API_KEY'; // Replace with your API key

function getWeather() {
    const location = document.getElementById('locationInput').value;
    const weatherInfoDiv = document.getElementById('weatherInfo');
    weatherInfoDiv.innerHTML = 'Loading...';

    // Fetch weather data from OpenWeatherMap API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                weatherInfoDiv.innerHTML = `
                    <h2>${data.name}</h2>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
            } else {
                weatherInfoDiv.innerHTML = 'Location not found. Please try again.';
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherInfoDiv.innerHTML = 'An error occurred. Please try again.';
        });
}
