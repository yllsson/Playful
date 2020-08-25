
document.addEventListener("DOMContentLoaded", function() {

    // created a function to highlight the image if user clicks it... 

    var hamilton = document.getElementById('hamilton');
    var lionKing = document.getElementById('lionKing');
    var bookOfMormon = document.getElementById('bookOfMormon');
    var wicked = document.getElementById('wicked');

    // hamilton.addEventListener("click", function (event) {
    
    //     // when click image - highlight pic and select this play in dropdown
    //     event.target.style.backgroundImage = "url(pics/hamilton2.jpg)";
    // });



    // tried creating a function that highlights an image if it's selected in the dropdown
        
    var play = document.getElementById('play');
    play.addEventListener('change', function (event) {
        var ddValue = event.target.value;

        switch (ddValue) {
            case hamilton.id: 
            hamilton.style.backgroundImage = "url(pics/hamilton2.jpg)";
            lionKing.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(pics/lionKing.jpg)";
            bookOfMormon.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(pics/bookOfMormon.jpg)";
            wicked.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(pics/wicked.jpg)";
            break;

            case lionKing.id:
            hamilton.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(pics/hamilton2.jpg)";
            lionKing.style.backgroundImage = "url(pics/lionKing.jpg)";
            bookOfMormon.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(pics/bookOfMormon.jpg)";
            wicked.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(pics/wicked.jpg)";
            break;

            case bookOfMormon.id: 
            hamilton.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(pics/hamilton2.jpg)";
            lionKing.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(pics/lionKing.jpg)";
            bookOfMormon.style.backgroundImage = "url(pics/bookOfMormon.jpg)";
            wicked.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(pics/wicked.jpg)";
            break;

            case wicked.id: 
            hamilton.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(pics/hamilton2.jpg)";
            lionKing.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(pics/lionKing.jpg)";
            bookOfMormon.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(pics/bookOfMormon.jpg)";
            wicked.style.backgroundImage = "url(pics/wicked.jpg)";

            break;

            default: console.log("Missing case", ddValue);
        }

    });

});

function goToBooking() {
    window.location="pages/booking.html";
};