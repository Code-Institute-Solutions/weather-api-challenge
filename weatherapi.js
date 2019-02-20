let request = new XMLHttpRequest();
let APIKEY = ""; // Insert API key from openweathermap.org/api between the quotes here

function displayNicely(apiData) {
    apiData = JSON.parse(apiData);
    console.log(apiData);

    let htmlString = apiData.name + " " + apiData.weather[0].description;
    htmlString += `<img src="https://openweathermap.org/img/w/${apiData.weather[0].icon}.png">`;
    document.getElementById("weatherData").innerHTML = htmlString;
}

function submitCity() {
    let cityName = document.getElementById("cityForm")["city"].value;
    request.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=" + APIKEY);
    request.send();
}


request.onreadystatechange = function() {
    if (this.readyState == 4) {
        if (this.status == 200) {
            displayNicely(this.responseText);
        }
        else if (this.status == 404) {
            document.getElementById("weatherData").innerHTML = "<h2>City not found! Please try again.</h2>";
        }
    }
}

/* 
Features we'd like to see:

The temperature in degrees Celsius (currently it is in Kelvin)
The current air pressure and wind speed
The data to be styled and presented nicely.

BONUS ROUND:

Use the documentation here: https://openweathermap.org/forecast5
Create another button that displays a forecast for the city
Think about the logic needed to do this. Can it be done with the current
functions? Do they need to be duplicated?

*/
