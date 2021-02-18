// //create an input variable for my input box

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

var loginContainer = $('<div></div>')
$(loginContainer).attr('class', 'login')
$("body").append(loginContainer);

var userName = $('<input></input>');
$(userName).attr('id', 'userName');
$(userName).attr('placeholder','Username')
$(userName).attr('type','text')
$(loginContainer).append(userName);


var button = $('<button></button>');
$(button).attr('id','button');
$(button).attr('class', 'submit');
$(button).text('Login')
$(loginContainer).append(button)


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

        var resultCard = $(`<span class="table"></span>`)
        var cardLocation = $(`<h3 >City: ${weather.city}<br></h3>`)
        var cardWeather = $(`<h3 >Current: ${weather.temp}<br></h3>`)
        var cardFeels = $(`<h3 >Feels Like: ${weather.feeslLike}<br></h3>`)
        var cardHumidity =$(`<h3 >Humidity: ${weather.humidity}<br></h3>`)
        var cardWindSpeed =$(`<h3 >Wind Speed: ${weather.windSpeed}<br></h3>`)
        var cardWindDir = $(`<h3 >Wind Direction: ${weather.windDirection}<br></h3>`)
        var cardDescription = $(`<h3>${weather.weatherDes}<br></h3>`)

        resultCard.append(cardLocation).append(cardWeather).append(cardFeels).append(cardHumidity).append(cardWindSpeed).append(cardWindDir).append(cardDescription)
        resultBox.append(resultCard)
    })  
});

 const saveToLocalStorage = () => {
    let inputName = userName.val()
    let location = $("#input").val()
    let inputNameString = JSON.stringify(inputName);
      localStorage.setItem(inputNameString , location )
  }
  $(button).click(saveToLocalStorage)

  console.log(JSON.parse(localStorage.getItem('textInput')))

  
