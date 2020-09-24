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
    for (i=0; i < response.suggestions[3].entities.length; i++) {
    console.log(response.suggestions[3].entities[i].name);
    }
});


       
    