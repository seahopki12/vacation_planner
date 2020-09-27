// the weather api starts here
$(document).foundation();

$(".button").on("click", function () {

    $("#default").hide();
    $("#result").show();

    var cityName = $("#inputVal").val();

    getCityName(cityName);


})
var name = $("#inputVal").val();
// this function will grab the name of the city searched and then pass it to the open weather API
function getCityName(name) {
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + name + "&appid=3e0e5c5529a43577f74e6903ca5baa30";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log(response.city.coord.lat, response.city.coord.lon)
        getEl(response);
        initMap(response.city.coord.lat, response.city.coord.lon);
    });
}

// this fucntion is going to create the elements and from the object grabbed from the open weather API
function getEl(object) {
    
}



// the trip advisor functions start here
var search = $("search-button").val();

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://hotels4.p.rapidapi.com/locations/search?locale=en_US&query=" + search + "",
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "hotels4.p.rapidapi.com",
        "x-rapidapi-key": "fb518a1229msh5ea7cb98422b2b6p15ba87jsn21c2e26bff8d"
    }
}

$.ajax(settings).done(function (response) {
    // console.log(response);
    for (i = 0; i < response.suggestions[3].entities.length; i++) {
        console.log(response.suggestions[3].entities[i].name);
    }
});



// the places to visit functions start here
let map;
let service;
let infowindow;


function initMap(lat,lon) {
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