// Preload audio files and store them in a dictionary
var audioFiles = {
  "w": new Audio("sounds/tom-1.mp3"),
  "a": new Audio("sounds/tom-2.mp3"),
  "s": new Audio("sounds/tom-3.mp3"),
  "d": new Audio("sounds/tom-4.mp3"),
  "j": new Audio("sounds/snare.mp3"),
  "k": new Audio("sounds/crash.mp3"),
  "l": new Audio("sounds/kick-bass.mp3")
};

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  if (audioFiles[key]) {
    audioFiles[key].currentTime = 0;  // Rewind to the start
    audioFiles[key].play();
  } else {
    console.log(key);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  if (activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}
