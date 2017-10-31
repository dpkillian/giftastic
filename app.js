// INITIALIZE VARIABLES
// 


var pets = ["dog", "cat", "turtle", "snake", "ferret", "goldfish", "monkey", "pig", "frog", "goat", "gerbil", "gecko", "horse", "hampster", "rabbit", "spider"];

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
		temp.addClass("btn btn-success");
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
        // This line of code will grab the input from the textbox
        var pet = $(".form-control").val().trim();

        // The pet from the textbox is then added to our array
        pets.push(pet);

        // Calling renderButtons which handles the processing of our pet array
        renderButtons();

      });

// ON BUTTON PRESS [PETS], CAPTURE DATA AND QUERY GIPHY API AND DISPLAY RESULTS
// 

    // $("#addToPets").on("click", function() {

    //   var pet = $(this).attr("data-name");
    //   var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    //     pet + "&api_key=MzS1nCKysUbxu85KTHa8WLYbeOvjiDAu&limit=5";

    //   $.ajax({
    //       url: queryURL,
    //       method: "GET"
    //     })
    //     .done(function(response) {
    //       var results = response.data;

    //       for (var i = 0; i < results.length; i++) {
    //         var gifDiv = $("<div class='item'>");

    //         var rating = results[i].rating;

    //         var p = $("<p>").text("Rating: " + rating);

    //         var petImage = $("<img>");
    //         petImage.attr("src", results[i].images.fixed_height.url);

    //         gifDiv.prepend(p);
    //         gifDiv.prepend(petImage);

    //         $("#rowOfGifs").prepend(gifDiv);
    //       }
    //     });
    // });



renderButtons();




// {
//     "data": [
//         {
//             type: "gif",
//             id: "FiGiRei2ICzzG",
//             slug: "funny-cat-FiGiRei2ICzzG",
//             url: "http://giphy.com/gifs/funny-cat-FiGiRei2ICzzG",
//             bitly_gif_url: "http://gph.is/1fIdLOl",
//             bitly_url: "http://gph.is/1fIdLOl",
//             embed_url: "http://giphy.com/embed/FiGiRei2ICzzG",
//             username: "",
//             source: "http://tumblr.com",
//             rating: "g",
//             caption: "",
//             content_url: "",
//             source_tld: "tumblr.com",
//             source_post_url: "http://tumblr.com",
//             import_datetime: "2014-01-18 09:14:20",
//             trending_datetime: "1970-01-01 00:00:00",
//             images: {
//                 fixed_height: {
//                     url: "http://media2.giphy.com/media/FiGiRei2ICzzG/200.gif",
//                     width: "568",
//                     height: "200",
//                     size: "460622",
//                     mp4: "http://media2.giphy.com/media/FiGiRei2ICzzG/200.mp4",
//                     mp4_size: "13866",
//                     webp: "http://media2.giphy.com/media/FiGiRei2ICzzG/200.webp",
//                     webp_size: "367786"
//                 },
//                 fixed_height_still: {
//                     url: "http://media2.giphy.com/media/FiGiRei2ICzzG/200_s.gif",
//                     width: "568",
//                     height: "200"
//                 },
//                 fixed_height_downsampled: {
//                     url: "http://media2.giphy.com/media/FiGiRei2ICzzG/200_d.gif",
//                     width: "568",
//                     height: "200",
//                     size: "476276",
//                     webp: "http://media2.giphy.com/media/FiGiRei2ICzzG/200_d.webp",
//                     webp_size: "100890"
//                 },
//                 fixed_width: {
//                     url: "http://media2.giphy.com/media/FiGiRei2ICzzG/200w.gif",
//                     width: "200",
//                     height: "70",
//                     size: "90483",
//                     mp4: "http://media2.giphy.com/media/FiGiRei2ICzzG/200w.mp4",
//                     mp4_size: "14238",
//                     webp: "http://media2.giphy.com/media/FiGiRei2ICzzG/200w.webp",
//                     webp_size: "47302"
//                 },
//                 fixed_width_still: {
//                     url: "http://media2.giphy.com/media/FiGiRei2ICzzG/200w_s.gif",
//                     width: "200",
//                     height: "70"
//                 },
//                 fixed_width_downsampled: {
//                     url: "http://media2.giphy.com/media/FiGiRei2ICzzG/200w_d.gif",
//                     width: "200",
//                     height: "70",
//                     size: "71069",
//                     webp: "http://media2.giphy.com/media/FiGiRei2ICzzG/200w_d.webp",
//                     webp_size: "13186"
//                 },
//                 fixed_height_small: {
//                     url: "http://media2.giphy.com/media/FiGiRei2ICzzG/100.gif",
//                     width: "284",
//                     height: "100",
//                     size: "460622",
//                     webp: "http://media2.giphy.com/media/FiGiRei2ICzzG/100.webp",
//                     webp_size: "72748"
//                 },
//                 fixed_height_small_still: {
//                     url: "http://media2.giphy.com/media/FiGiRei2ICzzG/100_s.gif",
//                     width: "284",
//                     height: "100"
//                 },
//                 fixed_width_small: {
//                     url: "http://media2.giphy.com/media/FiGiRei2ICzzG/100w.gif",
//                     width: "100",
//                     height: "35",
//                     size: "90483",
//                     webp: "http://media2.giphy.com/media/FiGiRei2ICzzG/100w.webp",
//                     webp_size: "18298"
//                 },
//                 fixed_width_small_still: {
//                     url: "http://media2.giphy.com/media/FiGiRei2ICzzG/100w_s.gif",
//                     width: "100",
//                     height: "35"
//                 },
//                 downsized: {
//                     url: "http://media2.giphy.com/media/FiGiRei2ICzzG/giphy.gif",
//                     width: "500",
//                     height: "176",
//                     size: "426811"
//                 },
//                 downsized_still: {
//                     url: "http://media2.giphy.com/media/FiGiRei2ICzzG/giphy_s.gif",
//                     width: "500",
//                     height: "176"
//                 },
//                 downsized_large: {
//                     url: "http://media2.giphy.com/media/FiGiRei2ICzzG/giphy.gif",
//                     width: "500",
//                     height: "176",
//                     size: "426811"
//                 },
//                 original: {
//                     url: "http://media2.giphy.com/media/FiGiRei2ICzzG/giphy.gif",
//                     width: "500",
//                     height: "176",
//                     size: "426811",
//                     frames: "22",
//                     mp4: "http://media2.giphy.com/media/FiGiRei2ICzzG/giphy.mp4",
//                     mp4_size: "51432",
//                     webp: "http://media2.giphy.com/media/FiGiRei2ICzzG/giphy.webp",
//                     webp_size: "291616"
//                 },
//                 original_still: {
//                     url: "http://media2.giphy.com/media/FiGiRei2ICzzG/giphy_s.gif",
//                     width: "500",
//                     height: "176"
//                 }
//             }
//         },
//         ... 24 more items
//     ],
//     "meta": {
//         "status": 200,
//         "msg": "OK"
//     },
//     "pagination": {
//         "total_count": 1947,
//         "count": 25,
//         "offset": 0
//     }
// }