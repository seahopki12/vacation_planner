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

})

$("#returnButton").on("click", function() {
    $("#result").hide();
    $("#default").show();
})

// this function will grab the name of the city searched and then pass it to the open weather API
function getCityName(name) {
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + name + "&appid=3e0e5c5529a43577f74e6903ca5baa30";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // console.log(response);
        // console.log(response.city.coord.lat, response.city.coord.lon)
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
    var date = $(".date-1");
    date.append(dayOne);
    var img = $("#image-1");
    var iconSrc = "http://openweathermap.org/img/w/" + object.daily[0].weather[0].icon + ".png";
    img.attr("src", iconSrc);

    var tempEl = $(".temperature-1");
    var tempF = (object.daily[0].temp.day - 273.15) * 1.8 + 32;
    tempEl.append(tempF.toFixed(0) + "°");

    var humEl = $(".humidity-1");
    var hum = object.daily[0].humidity;
    humEl.append(hum + "%")
}

// day2
function day2(object) {
    var date = $(".date-2");
    date.append(dayTwo);
    var img = $("#image-2");
    var iconSrc = "http://openweathermap.org/img/w/" + object.daily[1].weather[0].icon + ".png";
    img.attr("src", iconSrc);

    var tempEl = $(".temperature-2");
    var tempF = (object.daily[1].temp.day - 273.15) * 1.8 + 32;
    tempEl.append(tempF.toFixed(0) + "°");

    var humEl = $(".humidity-2");
    var hum = object.daily[1].humidity;
    humEl.append(hum + "%")
}
//day 3
function day3(object) {
    var date = $(".date-3");
    date.append(dayThree);
    var img = $("#image-3");
    var iconSrc = "http://openweathermap.org/img/w/" + object.daily[2].weather[0].icon + ".png";
    img.attr("src", iconSrc);

    var tempEl = $(".temperature-3");
    var tempF = (object.daily[2].temp.day - 273.15) * 1.8 + 32;
    tempEl.append(tempF.toFixed(0) + "°");

    var humEl = $(".humidity-3");
    var hum = object.daily[2].humidity;
    humEl.append(hum + "%")
}
//day4
function day4(object) {
    var date = $(".date-4");
    date.append(dayFour);
    var img = $("#image-4");
    var iconSrc = "http://openweathermap.org/img/w/" + object.daily[3].weather[0].icon + ".png";
    img.attr("src", iconSrc);

    var tempEl = $(".temperature-4");
    var tempF = (object.daily[3].temp.day - 273.15) * 1.8 + 32;
    tempEl.append(tempF.toFixed(0) + "°");

    var humEl = $(".humidity-4");
    var hum = object.daily[3].humidity;
    humEl.append(hum + "%")
}
//day5
function day5(object) {
    var date = $(".date-5");
    date.append(dayFive);
    var img = $("#image-5");
    var iconSrc = "http://openweathermap.org/img/w/" + object.daily[4].weather[0].icon + ".png";
    img.attr("src", iconSrc);

    var tempEl = $(".temperature-5");
    var tempF = (object.daily[4].temp.day - 273.15) * 1.8 + 32;
    tempEl.append(tempF.toFixed(0)) + "°";

    var humEl = $(".humidity-5");
    var hum = object.daily[4].humidity;
    humEl.append(hum + "%")
}
//day6
function day6(object) {
    var date = $(".date-6");
    date.append(daySix);
    var img = $("#image-6");
    var iconSrc = "http://openweathermap.org/img/w/" + object.daily[5].weather[0].icon + ".png";
    img.attr("src", iconSrc);

    var tempEl = $(".temperature-6");
    var tempF = (object.daily[5].temp.day - 273.15) * 1.8 + 32;
    tempEl.append(tempF.toFixed(0) + "°");

    var humEl = $(".humidity-6");
    var hum = object.daily[5].humidity;
    humEl.append(hum + "%")
}
//day7
function day7(object) {
    var date = $(".date-7");
    date.append(daySeven);
    var img = $("#image-7");
    var iconSrc = "http://openweathermap.org/img/w/" + object.daily[6].weather[0].icon + ".png";
    img.attr("src", iconSrc);

    var tempEl = $(".temperature-7");
    var tempF = (object.daily[6].temp.day - 273.15) * 1.8 + 32;
    tempEl.append(tempF.toFixed(0) + "°");

    var humEl = $(".humidity-7");
    var hum = object.daily[6].humidity;
    humEl.append(hum + "%")
}
//day8
function day8(object) {
    var date = $(".date-8");
    date.append(dayEight);
    var img = $("#image-8");
    var iconSrc = "http://openweathermap.org/img/w/" + object.daily[7].weather[0].icon + ".png";
    img.attr("src", iconSrc);

    var tempEl = $(".temperature-8");
    var tempF = (object.daily[7].temp.day - 273.15) * 1.8 + 32;
    tempEl.append(tempF.toFixed(0) + "°");

    var humEl = $(".humidity-8");
    var hum = object.daily[7].humidity;
    humEl.append(hum + "%")
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

    $.ajax(settings).done(function (response) {

        console.log(response);

        // for (i = 0; i < response.suggestions[3].entities.length; i++) {

        // console.log(response.suggestions[3].entities[i].name);

        $("#hotel-name0").append(response.suggestions[3].entities[0].name);
        $("#hotel-name1").append(response.suggestions[3].entities[1].name);
        $("#hotel-name2").append(response.suggestions[3].entities[2].name);

        // h2.append(hotelCity);
        // hotelHeader.append("<h2>" + "Hotel List" + "</h2>");
        // ul.append("<li>" + response.suggestions[3].entities[i].name + "<li>");
        // ul.append("<a>" + response.suggestions[3].entities[i].redirectPage + "</a>");
        // $("#hotels").html(hotelCity);
        // $("#hotels").html(hotelHeader);
        // $("#hotels").html(ul);
        // }

    });
};



// the places to visit functions start here
let map;
let service;
let infowindow;


function initMap(lat, lon) {
    let cityLat = lat;
    let cityLon = lon;

    // const sydney = new google.maps.LatLng(-33.867, 151.195);
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
