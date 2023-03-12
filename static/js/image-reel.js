let currentImageIndex;
let imageReel;
let imageList;
let imageTimer;
let touchStartX;
let touchStartY;
let touchEndX;
let touchEndY;
let reelCounter;

function ChangeImage() {
    let counterString = "";
    for (let i = 0; i < imageList.length; i++) {
        if (i == currentImageIndex) {
            imageList[i].classList.remove("transparent");
            counterString += " &#9673; ";
        }
        else {
            imageList[i].classList.add("transparent");
            counterString += " &#9678; ";
        }
    }
    reelCounter.innerHTML = counterString;
}

function RestartInterval() {
    clearInterval(imageTimer);
    imageTimer = null;
    imageTimer = setInterval(() => {
        currentImageIndex = (currentImageIndex + 1 < imageList.length) ? currentImageIndex + 1 : 0;
        ChangeImage(imageList);
    }, 10000);
}

function OnClick_RightArrow() {
    currentImageIndex = (currentImageIndex + 1 < imageList.length) ? currentImageIndex + 1 : 0;
    ChangeImage();
    RestartInterval();
}

function OnClick_LeftArrow() {
    currentImageIndex = (currentImageIndex - 1 >= 0) ? currentImageIndex - 1 : imageList.length -1;
    ChangeImage();
    RestartInterval();
}

function Handle_ImageSwipe() {
    // Try to ignore vertical swipes
    if (Math.abs(touchStartY - touchEndY) > Math.abs(touchStartX - touchEndX)) return;

    // Swipe Left
    if (touchStartX < touchEndX) OnClick_LeftArrow();
    // Swipe Right
    if (touchStartX > touchEndX) OnClick_RightArrow();

}

// When the page loads
window.onload = function(){
    console.log("Script Running");
    // Initialize Global Variables
    currentImageIndex = 0;
    imageReel = document.getElementById("image-reel");
    imageReel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].pageX;
        touchStartY = e.changedTouches[0].pageY;
    });
    imageReel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].pageX;
        touchEndY = e.changedTouches[0].pageY;
        Handle_ImageSwipe();
    });
    imageList = imageReel.getElementsByClassName("image-reel-item");
    reelCounter = document.getElementById("image-reel-counter");
    RestartInterval();

    ChangeImage()
};