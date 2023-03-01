// Move the backgroung image based on scroll position to
//   create a parallax effect.
function scroll_pic(id){
    var pos = document.documentElement.scrollTop;
    var height = document.getElementById("main-container").clientHeight;
    var scroll = (70*(pos/height) + 15) + "%";
    //document.getElementById(id).css("background-position", "70%" + scroll);
    document.getElementById(id).style.backgroundPosition = "55% " + scroll;
}

// When the page loads
window.onload = function(){
    console.log("Script Running");
    // Initialize Scroll Positions
    scroll_pic("parallax-container");

    // Whenever the user scrolls the page, update the backgroung image
    window.onscroll = function() {
        scroll_pic("parallax-container");
    };
};