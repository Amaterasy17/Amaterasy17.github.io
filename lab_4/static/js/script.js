function getCurrentWeather() {
    let city = encodeURIComponent(search.value) === "" ? "Москва" : encodeURIComponent(search.value);
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&lang=ru&units=metric&appid=32273e1edabe3f7e12571409dbace3cf")
        .then(Response => Response.json())
        .then(data_json => {
            if (data_json.cod === "404") {
                alert("Ошибка на стороне клиента");
            } else {
                parseAndSetWeather(data_json);
            }
        })
}

function parseAndSetWeather(json) {
    document.getElementById("city").innerHTML = "Погода на сегодня: " + json.name;
    console.log(json.name);
    document.getElementById("temperature").innerHTML = Math.round(json.main.temp) + "℃";
    console.log(json.main.temp);
    document.getElementById("picture").src="http://openweathermap.org/img/wn/"+json.weather[0].icon + "@2x.png";
    document.getElementById("type_of_weather").innerHTML = json.weather[0].description[0].toUpperCase() + json.weather[0].description.slice(1);
    console.log(json.weather.description);
    document.getElementById("feeling").innerHTML = "Ощущается как " + Math.round(json.main.feels_like) + "℃";
    document.getElementById("bar").innerHTML = "Давление: " + json.main.pressure + "Па";
    document.getElementById("vlaga").innerHTML = "Влажность: "+ json.main.humidity + "%";
    document.getElementById("wind").innerHTML = "Ветер: " + json.wind.speed +"м/c";
    console.log(json.main.humidity);
}
