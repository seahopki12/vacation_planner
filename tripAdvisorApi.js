$(document).foundation();

$(".button").on("click", function () {

    $("#default").hide();
    $("#result").show();


var search = $("#inputVal").val();

/* var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://best-booking-com-hotel.p.rapidapi.com/booking/best-accommodation?cityName=" + search + "&countryName=USA",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "best-booking-com-hotel.p.rapidapi.com",
		"x-rapidapi-key": "fb518a1229msh5ea7cb98422b2b6p15ba87jsn21c2e26bff8d"
	}
}

$.ajax(settings).done(function (response) {
	
	var ul = $("<ul />");		
	
	console.log(response);

				// $("#hotels").append(response.suggestions[3].entities[i].name);
			// h2.append(hotelCity);
			ul.append("<h>" + response.name + "</h>");
			ul.append("<a>" + response.link + "</a>");
			ul.append("<p>" + response.rating + "</p>");
			// $("#hotels").html(hotelCity);
			$("#hotels").html(ul);

});
});
*/


 var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://hotels4.p.rapidapi.com/locations/search?locale=en_US&query=" + search + "",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "hotels4.p.rapidapi.com",
		"x-rapidapi-key": "8ddd551e4dmshde7f558aafe3ccbp1bf380jsn5491b18bdb1f"
	}
}

	$.ajax(settings).done(function (response) {
		
			// var ul = $("<ul />");
			// var hotelHeader = $("<h2 />")

		for (i=0; i < response.suggestions[3].entities.length; i++) {
			
			console.log(queryURL);
			console.log(response);
			console.log(response.suggestions[3].entities[i].name);
			
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
	
		};

       
	});
});

/* <div>
                    <a href="#hotel-link">
                        <ul class="no-bullet">
                            <li id="hotel-name">Hotel name</li>
                            <li id="hotel-image">Hotel image</li>
                           <span class="star-rating display" style="font-size: 20px; color: orange;" >rating<i class="fas fa-star"></i></span>

                    </a>
				  </div>
				  */