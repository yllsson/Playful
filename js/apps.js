
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

            default: console.log("Missing case", ddValue);
        }

    });

});

function goToBooking() {
    window.location="pages/booking.html";
};