// INITIALIZE VARIABLES
// 


var pets = ["dog", "cat", "turtle"];
// var pets = ["dog", "cat", "turtle", "snake", "ferret", "goldfish", "monkey", "pig", "frog", "goat", "gerbil", "gecko", "horse", "hampster", "rabbit", "spider"];



// Giphy example request "ryan gosling", limit=5
// "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5"
// data.type (gif)
// data.rating (g)
// data.images.fixed_height.url
// data.images.fixed_height_still.url






// FUNCTION RENDERBUTTONS LOOPS THRU PET ARRAY TO DISPLAY INITIAL BUTTONS
// 

function renderButtons(){
	$("#rowOfButtons").empty();
	for (var i = 0; i < pets.length; i++){
		var temp = $("<button>");
		temp.addClass("btn btn-success animal");
		temp.attr("data-name", pets[i]);
		temp.text(pets[i]);
		console.log(temp);
		$("#rowOfButtons").append(temp);
	}
}

// ON BUTTON PRESS "ADD", CAPTURE DATA AND ADD NEW BUTTON, APPLY SEARCH FIELD
// 

      // This function handles events where one button is clicked
      $("#addToPets").on("click", function(event) {
        // event.preventDefault() prevents the form from trying to submit itself.
        // We're using a form so that the user can hit enter instead of clicking the button if they want
        event.preventDefault();
        console.log($(".form-control").val().trim());
        // This line of code will grab the input from the textbox
        var pet = $(".form-control").val().trim();

        // The pet from the textbox is then added to our array
        pets.push(pet);

        // Calling renderButtons which handles the processing of our pet array
        renderButtons();

      });

// ON BUTTON PRESS [PETS], CAPTURE DATA AND QUERY GIPHY API AND DISPLAY RESULTS
// 


	// Adding click event listeners to all elements with a class of "movie"
    $(document).on("click", ".animal", displayMovieInfo);

    function displayMovieInfo() {

      var pet = $(this).attr("data-name");
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        pet + "&api_key=MzS1nCKysUbxu85KTHa8WLYbeOvjiDAu&rating=g&limit=10";

      $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
          var results = response.data;

          for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div class='item'>");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var petImage = $("<img>");
            petImage.attr("src", results[i].images.fixed_height.url);

            gifDiv.prepend(p);
            gifDiv.prepend(petImage);

            $("#rowOfGifs").prepend(gifDiv);
          }
        });
    }



renderButtons();



