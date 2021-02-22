
var container = $("<div></div>")
$(container).attr("id", "container");
$("body").append(container)

var searchBox = $("<div></div>")
$(searchBox).attr('id', 'searchBox')
$(container).append(searchBox)

var inputBox = $("<input></input>")
$(inputBox).attr('placeholder','Enter Location Here')
$(inputBox).attr('type','text')
$(inputBox).attr('id','input')
$(inputBox).attr("class", 'search')
$(searchBox).append(inputBox);

var submit = $("<button></button>");
$(submit).attr('id', 'submit');
$(submit).attr('class', 'submit');
$(submit).text('Search')
$(searchBox).append(submit)

var resultBox = $("<div></div>");
$(resultBox).attr("id","results");
$("body").append(resultBox);

var userName = $("<input></input>");
$(userName).attr("id", "username");
$(userName).attr("type", "text");
$(userName).attr("placeholder", "Enter username");
$(searchBox).append(userName);

var login = $("<button></button>");
$(login).attr("id", "login")
$(login).text('Login');
$(searchBox).append(login);

var save = $("<button></button>");
$(save).attr("id", "save")
$(save).text('save');
$(searchBox).append(save);


$("#submit").click(function() {
    let userInput = $('#input').val();

     $.get(`http://api.weatherstack.com/current?access_key=fd35e38508293aefdabe73f4bb33a7a2&query=${userInput}`, (data) => {
        $("#results").empty()
        var data = (data)

        var weather = {
        city: data.location.name,
        temp: data.current.temperature,
        humidity: data.current.humidity,
        feelsLike: data.current.feelslike,
        weatherDes: data.current.weather_descriptions,
        windSpeed: data.current.wind_speed,
        windDirection: data.current.wind_dir,
        icon: data.weather_icon
        }
console.log(weather.icon)
        var resultCard = $(`<table class="list"></table>`)
        var cardLocation = $(`<div class="table" id="city">${weather.city}</div>`)
        var cardWeather = $(`<div class="table" id="temp">${weather.temp}F</div>`)
        var cardFeels = $(`<div class="table" id="feels">Feels Like: ${weather.feelsLike}</div>`)
        var cardHumidity =$(`<div class="table" id="hum">Humidity: ${weather.humidity}%</div>`)
        var cardWindSpeed =$(`<div class="table" id="windSpeed>Wind Speed: ${weather.windSpeed}</div>`)
        var cardWindDir = $(`<div class="table" id="windDir>Wind Direction: ${weather.windDirection}</div>`)
        var cardDescription = $(`<div id"description">Description:${weather.weatherDes}<div>`)
        
        resultCard.append(cardLocation).append(cardWeather).append(cardFeels).append(cardHumidity).append(cardWindSpeed).append(cardWindDir).append(cardDescription).append(icon)
        resultBox.append(resultCard)
      
        })
    });



 const saveToLocalStorage = () => {
    let inputName = userName.val()
    let location = $("#input").val()
    localStorage.setItem(inputName , location )
    
  }
  $(save).click(saveToLocalStorage)

const accessLocalStorage = () => {
    let inputName = userName.val()
    let x = localStorage.getItem(inputName);
    $("#input").val(x)
    }
    
$(login).click(accessLocalStorage)
$(login).click(function() {
    let userInput = $('#input').val();


     $.get(`http://api.weatherstack.com/current?access_key=fd35e38508293aefdabe73f4bb33a7a2&query=${userInput}`, (data) => {
        $("#results").empty()
        var data = (data)

        var weather = {
        city: data.location.name,
        temp: data.current.temperature,
        humidity: data.current.humidity,
        feelsLike: data.current.feelslike,
        weatherDes: data.current.weather_descriptions,
        windSpeed: data.current.wind_speed,
        windDirection: data.current.wind_dir
        }

        var resultCard = $(`<table class="list"></table>`)
        var cardLocation = $(`<div class="table" id="city">${weather.city}</div>`)
        var cardWeather = $(`<div class="table" id="temp">${weather.temp}</div>`)
        var cardFeels = $(`<div class="table" id="feels">Feels Like: ${weather.feelsLike}</div>`)
        var cardHumidity =$(`<div class="table" id="hum">Humidity: ${weather.humidity}%</div>`)
        var cardWindSpeed =$(`<div class="table" id="windSpeed>Wind Speed: ${weather.windSpeed}</div>`)
        var cardWindDir = $(`<div class="table" id="windDir>Wind Direction: ${weather.windDirection}</div>`)
        var cardDescription = $(`<div class="table" id"description">Description:${weather.weatherDes}<div>`)
        
        resultCard.append(cardLocation).append(cardWeather).append(cardFeels).append(cardHumidity).append(cardWindSpeed).append(cardWindDir).append(cardDescription)
        resultBox.append(resultCard)
      
        })
    
    });
