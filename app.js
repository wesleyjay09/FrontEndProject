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

var searchIcon = $('<i></i>');
$(searchIcon).attr('class', 'fa fa-search');
$(submit).append(searchIcon)




var resultBox = $("<div></div>");
$(resultBox).attr("id","results");
$("body").append(resultBox);


$("#submit").click(function() {
    
    var userInput = $('#input').val();
   
    
    
    
    
    //console.log(userInput
    
    $.get(`http://api.weatherstack.com/current?access_key=fd35e38508293aefdabe73f4bb33a7a2&query=${userInput}`, (data) => {
        $("#results").empty()
        var data = (data)
        
        var city = data.location.name;
        var temp = data.current.temperature + 'F';
        var humidity = data.current.humidity;
        var icon = data.current.weather_icons;
        var feelsLike = data.current.feelslike;
        var weatherDes = data.current.weather_descriptions;
        var windSpeed = data.current.wind_speed;
        var windDirection = data.current.wind_dir;

            var resultCard = $(`<span class="result-card"></span>`)
            var cardLocation = $(`<h3 >City ${city}<br></h3>`)
            var cardWeather = $(`<h3 >Current ${temp}<br></h3>`)
            var cardFeels = $(`<h3 >Feels Like ${feelsLike}<br></h3>`)
            var cardHumidity =$(`<h3 >Humidity ${humidity}<br></h3>`)
            var cardWindSpeed =$(`<h3 >Wind Speed ${windSpeed}<br></h3>`)
            var cardWindDir = $(`<h3 >Wind Direction ${windDirection}<br></h3>`)

            var cardIcon = $(`<img class=card-image${icon} src='${icon}'></ul>`)
            var cardDescription = $(`<h3>${weatherDes}<br></h3>`)
            resultCard.append(cardLocation).append(cardWeather).append(cardFeels).append(cardHumidity).append(cardWindSpeed).append(cardWindDir).append(cardIcon).append(cardDescription)
            resultBox.append(resultCard)
        //  })
      })  
 });

// {
//     "request": {
//         "type": "City",
//         "query": "New York, United States of America",
//         "language": "en",
//         "unit": "m"
//     },
//     "location": {
//         "name": "New York",
//         "country": "United States of America",
//         "region": "New York",
//         "lat": "40.714",
//         "lon": "-74.006",
//         "timezone_id": "America/New_York",
//         "localtime": "2019-09-07 08:14",
//         "localtime_epoch": 1567844040,
//         "utc_offset": "-4.0"
//     },
//     "current": {
//         "observation_time": "12:14 PM",
//         "temperature": 13,
//         "weather_code": 113,
//         "weather_icons": [
//             "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
//         ],
//         "weather_descriptions": [
//             "Sunny"
//         ],
//         "wind_speed": 0,
//         "wind_degree": 349,
//         "wind_dir": "N",
//         "pressure": 1010,
//         "precip": 0,
//         "humidity": 90,
//         "cloudcover": 0,
//         "feelslike": 13,
//         "uv_index": 4,
//         "visibility": 16
//     }
// }