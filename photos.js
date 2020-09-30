
function photos(service) {

  var request = {
    location: map.getCenter(),
    radius: '500',
    query: $("#inputVal").val()
  };

  var service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callbackCity);

  
  function callbackCity(place, status) {
    var request = {
        placeId: place[0].place_id,
        fields: ['photos']
      };

    if (status == google.maps.places.PlacesServiceStatus.OK) {
        service.getDetails(request, callbackDetails);
    }
    }

    function callbackDetails(place, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            // console.log(place.photos[0].getUrl());
        //   createMarker(place);
          console.log(place);
          $("#resultImage").attr("src", place.photos[0].getUrl());
        }
        }
    
}