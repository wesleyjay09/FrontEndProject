
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
        windDirection: data.current.wind_dir
        }

        var resultCard = $(`<ul class="list"></ul>`)
        var cardLocation = $(`<li >City: ${weather.city}<br></li>`)
        var cardWeather = $(`<li >Current: ${weather.temp}<br></li>`)
        var cardFeels = $(`<li >Feels Like: ${weather.feelsLike}<br></li>`)
        var cardHumidity =$(`<li >Humidity: ${weather.humidity}<br></li>`)
        var cardWindSpeed =$(`<li >Wind Speed: ${weather.windSpeed}<br></li>`)
        var cardWindDir = $(`<li >Wind Direction: ${weather.windDirection}<br></li>`)
        var cardDescription = $(`<li>${weather.weatherDes}<br></li>`)

        resultCard.append(cardLocation).append(cardWeather).append(cardFeels).append(cardHumidity).append(cardWindSpeed).append(cardWindDir).append(cardDescription)
        resultBox.append(resultCard)
      
        })
    });



 const saveToLocalStorage = () => {
    let inputName = userName.val()
    let location = $("#input").val()
    console.log(inputName)
      localStorage.setItem(inputName , location )
  }
  $(save).click(saveToLocalStorage)

const accessLocalStorage = () => {
    localStorage.getItem(inputName)
}
 