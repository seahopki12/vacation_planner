$(document).foundation();
// the weather api starts here


var apiKey = "&appid=df40e453f18e8b1150a67320b38cc787";
// grab dates from moment.js
let dayOne = moment().format(" D-M-YY");
let dayTwo = moment().add(1, "days").format(" D-M-YY");
let dayThree = moment().add(2, "days").format(" D-M-YY");
let dayFour = moment().add(3, "days").format(" D-M-YY");
let dayFive = moment().add(4, "days").format(" D-M-YY");
let daySix = moment().add(5, "days").format(" D-M-YY");
var daySeven = moment().add(6, "days").format(" D-M-YY");
var dayEight = moment().add(7, "days").format(" D-M-YY");

$(".button").on("click", function () {

    $("#default").hide();
    $("#result").show();
    $("#returnButton").show();
    var cityName = $("#inputVal").val();

    getCityName(cityName);
    getHotels(cityName);
    strUpperCase();

})

$("#returnButton").on("click", function (e) {
    $("#result").hide();
    $("#default").show();

    var element = e.target;
    if(element.matches("button") === true){
        $("#inputVal").val("");
    }
})

// this function will grab the name of the city searched and then pass it to the open weather API
function getCityName(name) {
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + name + "&appid=3e0e5c5529a43577f74e6903ca5baa30";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        initMap(response.city.coord.lat, response.city.coord.lon);
        weatherAPI(response.city.coord.lat, response.city.coord.lon);
    });
}

function weatherAPI(lat, lon) {
    var queryURL =
        "https://api.openweathermap.org/data/2.5/onecall?lat=" +
        lat +
        "&lon=" +
        lon +
        apiKey;

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        console.log(response)
        day1(response);
        day2(response);
        day3(response);
        day4(response);
        day5(response);
        day6(response);
        day7(response);
        day8(response);
    });
}

// this fucntion is going to create the elements and from the object grabbed from the open weather API

function day1(object) {
    $("#div1").empty();
    var weatherDiv1 = $("#div1");
    var date = $("<p>");
    date.append("Date: " + dayOne);
    var img = $("<img>");
    var iconSrc = "http://openweathermap.org/img/w/" + object.daily[0].weather[0].icon + ".png";
    img.attr("src", iconSrc);

    var tempEl = $("<p>");
    var tempF = (object.daily[0].temp.day - 273.15) * 1.8 + 32;
    tempEl.append("Temperature: " + tempF.toFixed(0) + "°");

    var humEl = $("<p>");
    var hum = object.daily[0].humidity;
    humEl.append("Humdity: " + hum + "%");
    weatherDiv1.append(date, img, tempEl, humEl);
}

// day2
function day2(object) {
    $("#div2").empty();
    var weatherDiv2 = $("#div2");
    var date = $("<p>");
    date.append("Date: " + dayTwo);
    var img = $("<img>");
    var iconSrc = "http://openweathermap.org/img/w/" + object.daily[1].weather[0].icon + ".png";
    img.attr("src", iconSrc);

    var tempEl = $("<p>");
    var tempF = (object.daily[1].temp.day - 273.15) * 1.8 + 32;
    tempEl.append("Temperature: " + tempF.toFixed(0) + "°");

    var humEl = $("<p>");
    var hum = object.daily[1].humidity;
    humEl.append("Humidity: " + hum + "%");
    weatherDiv2.append(date, img, tempEl, humEl);
}
//day 3
function day3(object) {
    $("#div3").empty();
    var weatherDiv3 = $("#div3");
    var date = $("<p>");
    date.append("Date: " + dayThree);
    var img = $("<img>");
    var iconSrc = "http://openweathermap.org/img/w/" + object.daily[2].weather[0].icon + ".png";
    img.attr("src", iconSrc);

    var tempEl = $("<p>");
    var tempF = (object.daily[2].temp.day - 273.15) * 1.8 + 32;
    tempEl.append("Temperature: " + tempF.toFixed(0) + "°");

    var humEl = $("<p>");
    var hum = object.daily[2].humidity;
    humEl.append("Humdity: " + hum + "%");
    weatherDiv3.append(date, img, tempEl, humEl);
}
//day4
function day4(object) {
    $("#div4").empty();
    var weatherDiv4 = $("#div4");
    var date = $("<p>");
    date.append("Date: " + dayFour);
    var img = $("<img>");
    var iconSrc = "http://openweathermap.org/img/w/" + object.daily[3].weather[0].icon + ".png";
    img.attr("src", iconSrc);

    var tempEl = $("<p>");
    var tempF = (object.daily[3].temp.day - 273.15) * 1.8 + 32;
    tempEl.append("Tempearture: " + tempF.toFixed(0) + "°");

    var humEl = $("<p>");
    var hum = object.daily[3].humidity;
    humEl.append("Humidity: " + hum + "%");
    weatherDiv4.append(date, img, tempEl, humEl)
}
//day5
function day5(object) {
    $("#div5").empty();
    var weatherDiv5 = $("#div5");
    var date = $("<p>");
    date.append("Date: " + dayFive);
    var img = $("<img>");
    var iconSrc = "http://openweathermap.org/img/w/" + object.daily[4].weather[0].icon + ".png";
    img.attr("src", iconSrc);

    var tempEl = $("<p>");
    var tempF = (object.daily[4].temp.day - 273.15) * 1.8 + 32;
    tempEl.append("Temperature: " + tempF.toFixed(0) + "°");

    var humEl = $("<p>");
    var hum = object.daily[4].humidity;
    humEl.append("Humidity: " + hum + "%");
    weatherDiv5.append(date, img, tempEl, humEl)
}
//day6
function day6(object) {
    $("#div6").empty();
    var weatherDiv6 = $("#div6");
    var date = $("<p>");
    date.append("Date: " + daySix);
    var img = $("<img>");
    var iconSrc = "http://openweathermap.org/img/w/" + object.daily[5].weather[0].icon + ".png";
    img.attr("src", iconSrc);

    var tempEl = $("<p>");
    var tempF = (object.daily[5].temp.day - 273.15) * 1.8 + 32;
    tempEl.append("Temperature: " + tempF.toFixed(0) + "°");

    var humEl = $("<p>");
    var hum = object.daily[5].humidity;
    humEl.append("Humdity: " + hum + "%");

    weatherDiv6.append(date, img, tempEl, humEl);
}
//day7
function day7(object) {
    $("#div7").empty();
    var weatherDiv7 = $("#div7");

    var date = $("<p>");
    date.append("Date: " + daySeven);
    var img = $("<img>");
    var iconSrc = "http://openweathermap.org/img/w/" + object.daily[6].weather[0].icon + ".png";
    img.attr("src", iconSrc);

    var tempEl = $("<p>");
    var tempF = (object.daily[6].temp.day - 273.15) * 1.8 + 32;
    tempEl.append("Temperature: " + tempF.toFixed(0) + "°");

    var humEl = $("<p>");
    var hum = object.daily[6].humidity;
    humEl.append("Humidty: " + hum + "%")
    weatherDiv7.append(date, img, tempEl, humEl);
}
//day8
function day8(object) {
    $("#div8").empty();
    var weatherDiv8 = $("#div8")
    var dateEl = $("<p>")
    dateEl.append("Date: " + dayEight);

    var imageEl = $("<img>")
    var iconSrc = "http://openweathermap.org/img/w/" + object.daily[7].weather[0].icon + ".png";
    imageEl.attr("src", iconSrc);

    var tempEl = $("<p>");
    var tempF = (object.daily[7].temp.day - 273.15) * 1.8 + 32;
    tempEl.append("Temperature: " + tempF.toFixed(0) + "°");

    var humEl = $("<p>");
    var hum = object.daily[7].humidity;
    humEl.append("Humidity: " + hum + "%")

    weatherDiv8.append(dateEl, imageEl, tempEl, humEl)
}

// function to always convert the first string of the searched name to upper case 

function strUpperCase() {
    var name = $("#inputVal").val();
    var str = name.toLowerCase();
    var CapStr = str.charAt(0).toUpperCase() + str.slice(1);
    $("#cityTitle").text(CapStr);
}


// the trip advisor functions start here

function getHotels(name) {


    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://hotels4.p.rapidapi.com/locations/search?locale=en_US&query=" + name + "",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "hotels4.p.rapidapi.com",
            "x-rapidapi-key": "f1093452bamshd6b7a4c4629f40dp18ecedjsn780c4a7d4b40",
        }
    }
    $("#hotel-name0").empty();
    $("#hotel-name1").empty();
    $("#hotel-name2").empty();
    $.ajax(settings).done(function (response) {
        $("#hotel-name0").append(response.suggestions[3].entities[0].name);
        $("#hotel-name1").append(response.suggestions[3].entities[1].name);
        $("#hotel-name2").append(response.suggestions[3].entities[2].name);

    });
};

// the places to visit functions start here
let map;
let service;
let infowindow;

function initMap(lat, lon) {
    let cityLat = lat;
    let cityLon = lon;

    infowindow = new google.maps.InfoWindow();

    const request = {
        query: name,
        fields: ["name", "geometry"]

    };
    getPlace(request, cityLat, cityLon)

}

function getPlace(request, lat, lon) {

    map = new google.maps.Map(document.getElementById("map"), {
        center: new google.maps.LatLng(lat, lon),
        zoom: 15
    });
    service = new google.maps.places.PlacesService(map);
    photos(service);
    service.findPlaceFromQuery(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
            map.setCenter(results[0].geometry.location);
        }

    });

}

function createMarker(place) {
    const marker = new google.maps.Marker({
        map,
        position: place.geometry.location
    });
    google.maps.event.addListener(marker, "click", () => {
        infowindow.setContent(place.name);
        infowindow.open(map);
    });

}

function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
        }
    }
}