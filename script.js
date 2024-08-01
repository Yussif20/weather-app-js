const apiKey = "7a790157fdc0f0770cb4dfd11af5f843";
let city = "paris";
const searchButton = document.querySelector('button');
const cityInputField =document.querySelector('.city-name')

const updateCity = () => {
    const cityInput = cityInputField.value;
    city = cityInput;
    updateWeatherForCity();
};

const updateWeatherForCity = () => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    
    fetch(apiUrl).then(res => {
        if (!res.ok) {
            console.error(`HTTP error, Status: ${res.status}`);
        }
        return res.json();
    }).then(data => {
        updateWeather(data);
    }).catch(err => console.error(`There was a problem with fetching data ${err}`));
};

const updateWeather = (data) => {
    document.querySelector(".city").textContent = `${data['name']}`;
    document.querySelector(".temp").textContent = `${(data.main.temp - 273.15).toFixed(0)}°C`;
    document.querySelector(".humidity-measure").textContent = `${data.main.humidity}%`;
    document.querySelector(".wind-measure").textContent = `${data.wind.speed}km/h`;
    document.querySelector(".description").textContent = `${data.weather[0].description.toUpperCase()}`;   
};

searchButton.addEventListener('click', updateCity);

cityInputField.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        updateCity();
    }
});



updateWeatherForCity();
