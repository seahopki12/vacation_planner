$(document).foundation();

$(".button").on("click", function () {

    $("#default").hide();
    $("#result").show();

    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=hampton&appid=3e0e5c5529a43577f74e6903ca5baa30";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });

})
