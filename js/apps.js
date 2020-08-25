// want a function to highlight the image if user clicks it
document.addEventListener("DOMContentLoaded", function() {
    var hamilton = document.getElementById('hamilton');
    var lionKing = document.getElementById('lionKing');
    var bookOfMormon = document.getElementById('bookOfMormon');
    var wicked = document.getElementById('wicked');
    
    hamilton.addEventListener("click", function (event) {
    
        // when click image - highlight pic and select this play in dropdown
        event.target.style.backgroundImage = "url(pics/hamilton2.jpg)";
    });
});



// want another function to highlight the image if user picks that play in dropdown


// did a little JS code test here.. will delete this before merging with master branch

    // document.addEventListener('DOMContentLoaded', function() {
    //     var listItem = document.createElement('li');
    //     listItem.innerText = 'Testing - I was created in JS!';
    //     document.getElementById("jsTest").appendChild(listItem);
    // });