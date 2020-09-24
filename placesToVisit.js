// var queryUrl = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=AIzaSyAN2zO-OG31pWcxIjsVFf5jllqQI2i6oHQ&inputtype=textquery&input=London";

// $.ajax({
//     url: queryUrl,
//     method: "GET"
// }).then(function (response){
//     console.log(response);
// })



// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
let map;
let service;
let infowindow;


function initMap() {
    let lat;
    let lon;
    // const sydney = new google.maps.LatLng(-33.867, 151.195);
    infowindow = new google.maps.InfoWindow();
   
    const request = {
        query: "Museum of Contemporary Art Australia",
        fields: ["name", "geometry"]
    };
    getPlace(request, -33.867, 151.195)
   
}

function getPlace(request, lat, lon){

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
