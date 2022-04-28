function  displayTemperature(response) {
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description")
    let temperatureElement = document.querySelector("#temperature");
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    temperatureElement.innerHTML = `${Math.round(response.data.main.temp)}°`;
}

let apiKey = "506d09fcd6d63e6d24952f9fd229a34e";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Tehran&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);