// Query selectors
const searchInput = document.querySelector('.search input'); // Input field for city name
const searchButton = document.querySelector('.search button'); // Search button
const cityElement = document.querySelector('.city'); // City name element
const tempElement = document.querySelector('.temp'); // Temperature element
const humidityElement = document.querySelector('.details .humidity'); // Humidity element
const windElement = document.querySelector('.details .wind'); // Wind speed element

// Function to fetch and update weather data
function fetchWeather(city) {
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            const response = JSON.parse(this.responseText); // Parse the JSON response
            
            // Update HTML elements
            cityElement.textContent = response.name; // Update city name
            tempElement.textContent = `${response.main.temp}°C`; // Update temperature
            humidityElement.textContent = `${response.main.humidity}%`; // Update humidity
            windElement.textContent = `${response.wind.speed} km/hr`; // Update wind speed
        }
    });

    xhr.open('GET', `https://open-weather13.p.rapidapi.com/city/${city}/EN`);
    xhr.setRequestHeader('x-rapidapi-key', 'cd6191ded5mshca19aea61145675p1cfa3bjsn325494d87b30'); // Replace with your API key
    xhr.setRequestHeader('x-rapidapi-host', 'open-weather13.p.rapidapi.com');
    xhr.send(null);
}

// Event listener for search button
searchButton.addEventListener('click', () => {
    const city = searchInput.value; // Get city name from input field
    if (city) {
        fetchWeather(city); // Fetch weather data for the entered city
    }
});
