

$(".button").on("click", function() {
    var queryURL = "https://tripadvisor1.p.rapidapi.com/answers/list?limit=10&question_id=5283833&x-rapidapi-key=b518a1229msh5ea7cb98422b2b6p15ba87jsn21c2e26bff8d";

        $.ajax({
            url: queryURL,
            method: "GET", 
        }).then(function (response) {
            console.log()
       
 });  
});        