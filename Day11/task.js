document.getElementById('getWeatherBtn').addEventListener('click', function () {
    const city = document.getElementById('city').value;
    if (city === '') {
        alert('Please enter a city name');
        return;
    }

    const apiKey = '909d6461103c15e65a08fdc29010e158'; // Your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.cod === 404) {
                alert('City not found');
                return;
            }

            // Check if the API returns expected data
            console.log(data);

            const cityName = data.name;
            const temperature = data.main.temp;
            const weatherDescription = data.weather[0].description;

            document.getElementById('cityName').textContent = cityName;
            document.getElementById('temperature').textContent = `${temperature}°C`;
            document.getElementById('weatherDescription').textContent = weatherDescription;

            document.getElementById('weatherCard').style.display = 'block';
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
            alert('Error fetching weather data');
        });
});
