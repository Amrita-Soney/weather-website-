let weather = {
    "apiKey": "88c1b9ed11de51eac59fc8d527c62026",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey
        ).then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { temp, humidity } = data.main;
        const { description } = data.weather[0];
        const { speed } = data.wind;
        console.log(name, temp, humidity, speed)
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".temp").innerText = temp + " °C";
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};
document.querySelector(".search-container button").addEventListener("click", function () {
    weather.search();
}

);
document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
})
weather.fetchWeather("New delhi");

document.querySelector(".future-forecast").addEventListener("keyup", function () {
    let otherDayForcast = ''
    data.daily.forEach((day, idx) => {
        if (idx == 0) {
            currentTempEl.innerHTML = `
        
            <div class="other">
                <div class="day">${window.moment(day.dt * 1000).format('dddd')}</div>
                <div class="temp">Night - ${day.temp.night}&#176;C</div>
                <div class="temp">Day - ${day.temp.day}&#176;C</div>
            </div>
            
            `
        } else {
            otherDayForcast += `
            <div class="weather-forecast-item">
                <div class="day">${window.moment(day.dt * 1000).format('ddd')}</div>
                
                <div class="temp">Night - ${day.temp.night}&#176;C</div>
                <div class="temp">Day - ${day.temp.day}&#176;C</div>
            </div>
            
            `
        }
    })
})