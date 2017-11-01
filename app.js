// INITIALIZE VARIABLES
// 


var pets = ["dog", "cat", "turtle", "goldfish"];

// Long pets array for testing
// var pets = ["dog", "cat", "turtle", "snake", "ferret", "goldfish", "monkey", "pig", "frog", "goat", "gerbil", "gecko", "horse", "hampster", "rabbit", "spider"];




// FUNCTION RENDERBUTTONS LOOPS THRU PET ARRAY TO DISPLAY INITIAL BUTTONS
// 

function renderButtons(){
	$("#rowOfButtons").empty();
	for (var i = 0; i < pets.length; i++){
		var temp = $("<button>");
		temp.addClass("btn btn-success animal");
		temp.attr("style", "margin: 5px 5px;");
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

// ON BUTTON PRESS [PETS], CAPTURE DATA AND QUERY GIPHY API AND DISPLAY RESULTS VIA DISPLAYPETINFO
// 

// Adding click event listeners to all button elements with a class of "animal"
    $(document).on("click", ".animal", displayPetInfo);

// DISPLAYPETINFO GRABS BUTTON NAME AND QUERIES GIPHY FOR 10 GIFS AND DYNAMICALLY CREATES NEW DIV & IMG
    function displayPetInfo() {

      var pet = $(this).attr("data-name");
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        pet + "&api_key=MzS1nCKysUbxu85KTHa8WLYbeOvjiDAu&rating=g&limit=10";

        // AJAX call to GIPHY to GET SPECIFIC PET LISTED IN BUTTON LABEL DATA-NAME
        $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
          var results = response.data;

          // Loop thru AJAX results (defined by limit=10)
          for (var i = 0; i < results.length; i++) {
 			// Create variable for <div> with class "gif-div"
            var gifDiv = $("<div class='gif-div'>");
            // Create variable for Gif rating to be dislayed along with the gif
            var rating = results[i].rating;

            // Creating <p> tag with rating info
            var p = $("<p>").text("Rating: " + rating);

            // Creating <img> tag with custom labels to reference later
            var petImage = $("<img>");
            petImage.attr("src", results[i].images.fixed_height_still.url);
            petImage.attr("data-still", results[i].images.fixed_height_still.url);
            petImage.attr("data-animate", results[i].images.fixed_height.url);
            petImage.attr("data-state", "still");
            petImage.attr("class", "gif");

            // Prepend the gifDiv variable containing <div> tag with <p> and <img> tags
            gifDiv.prepend(p);
            gifDiv.prepend(petImage);

            // Prepend entire (huge) div to rowOfGif handle
            $("#rowOfGifs").prepend(gifDiv);
          }
        });
    }

// ON IMAGE PRESS <IMG>, FLIP DATA-STATE AND POINT <SRC> TO NEW URL (EITHER STILL OR ANIMATE)
// 

// Adding "document" click event listeners to all button elements with a class of "animal"

    $(document).on("click", ".gif", flipAndLoad);

    function flipAndLoad(){

    	console.log("FLIPANDLOAD CONDITION!!!");

        var state = $(this).attr("data-state");

        if (state==="still") {

          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate");

          // state = "animate";

          } else {

          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");


          // state = "still"

          }

    }




// RENDER ALL BUTTONS IN PETS ARRAY ON FIRST PAGE LOAD
renderButtons();



