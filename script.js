function getWeather() {
    const apiKey = 'YOUR_API_KEY'; 
    const city = document.getElementById('cityInput').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p>Weather: ${data.weather[0].description}</p>
          <p>Temperature: ${data.main.temp} &#8451;</p>
          <p>Humidity: ${data.main.humidity} %</p>
          <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  }
  