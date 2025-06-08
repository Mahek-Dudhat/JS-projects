const apiKey = "72d11bbea631fb1af6d9b907367990e3";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let temp = document.querySelector("#weather #temp");
let city = document.querySelector("#weather #city");
let humidity = document.querySelector("#detail1 #humidity");
let wind = document.querySelector("#detail2 #wind");
let SerachBox = document.querySelector("#SearchBox input");
let searchBtn = document.querySelector("#search");
let WeatherIcon = document.querySelector("#weather #WeatherIcon");
let ErrorMsg = document.querySelector("#main #ErrorMsg");
let weather = document.querySelector("#weather");

async function getWeatherData(cityName) {

    const res = await axios.get(apiUrl + cityName + `&appid=${apiKey}`);
    const data = res.data;
    console.log(res);

    if (data.cod == 200) {

        temp.innerHTML = Math.round(data.main.temp) + "°C";
        city.innerHTML = data.name;
        humidity.innerHTML = data.main.humidity + "%";
        wind.innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clear") {
            WeatherIcon.src = "./images/clear.png";
        }
        else if (data.weather[0].main == "Clouds") {
            WeatherIcon.src = "./images/clouds.png";
        }
        else if (data.weather[0].main == "Rain") {
            WeatherIcon.src = "./images/rain.png";
        }
        else if (data.weather[0].main == "Snow") {
            WeatherIcon.src = "./images/snow.png";
        }

        else if (data.weather[0].main == "Mist") {
            WeatherIcon.src = "./images/mist.png";
        }
        else if (data.weather[0].main == "Thunderstorm") {
            WeatherIcon.src = "./images/thunderstorm.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            WeatherIcon.src = "./images/drizzle.png";
        }
        else if (data.weather[0].main == "Fog") {
            WeatherIcon.src = "./images/fog.png";
        }

        weather.style.display = "block";
        weather.style.display = "flex";
        weather.style.flexDirection = "column";
        weather.style.alignItems = "center";
        weather.style.justifyContent = "center";
        weather.style.width = "100%";
        ErrorMsg.style.display = "block";


    } else {
        weather.style.display = "none";
        ErrorMsg.style.opacity = "1";
    }

}

searchBtn.addEventListener("click", () => {
    if (SerachBox.value.length !== 0) {
        getWeatherData(SerachBox.value);
    }
})

