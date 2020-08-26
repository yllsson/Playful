
document.addEventListener("DOMContentLoaded", function() {

    var hamilton = document.getElementById('hamilton');
    var lionKing = document.getElementById('lionKing');
    var bookOfMormon = document.getElementById('bookOfMormon');
    var wicked = document.getElementById('wicked');

    // this function highlights an image if it's selected in the dropdown
        
    var play = document.getElementById('play');

    play.addEventListener('change', function (event) {
        var ddValue = event.target.value;

        hamilton.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(pics/hamilton2.jpg)";
        lionKing.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(pics/lionKing.jpg)";
        bookOfMormon.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(pics/bookOfMormon.jpg)";
        wicked.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(pics/wicked.jpg)";

        switch (ddValue) {
            case hamilton.id: 
            hamilton.style.backgroundImage = "url(pics/hamilton2.jpg)";
            break;

            case lionKing.id:
            lionKing.style.backgroundImage = "url(pics/lionKing.jpg)";
            break;

            case bookOfMormon.id: 
            bookOfMormon.style.backgroundImage = "url(pics/bookOfMormon.jpg)";
            break;

            case wicked.id: 
            wicked.style.backgroundImage = "url(pics/wicked.jpg)";
            break;
        }
    });

    // created a function to highlight the image if user clicks it... leaving this in comments as it has no direct use at the moment
        // hamilton.addEventListener("click", function (event) {
        
        //     // when click image - highlight pic and select this play in dropdown
        //     event.target.style.backgroundImage = "url(pics/hamilton2.jpg)";
        // });

});

function goToBooking() {
    window.location="pages/booking.html";
};

function show_alert() {
    alert("Thanks for getting in touch. Someone will contact you shortly to help with your query.");
  };