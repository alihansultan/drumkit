var oldCurrentKey = null;

// Keyboard click

document.addEventListener("keydown", function(event) {

  // console.log(event.key);
  playSound(event.key);

  buttonAnimation2(event.key);

});


// Button click

var numberOfDrumButtons = document.querySelectorAll(".drum").length;



for (var i = 0; i <= numberOfDrumButtons; i++) {



  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    playSound(buttonInnerHTML);

    buttonAnimation2(buttonInnerHTML);

  });



}


function playSound(key) {
  var sound;
  var soundExist = true;

  switch (key) {
    case "w":
      sound = "tom-1.mp3";
      break;

    case "a":
      sound = "tom-2.mp3";
      break;

    case "s":
      sound = "tom-3.mp3";
      break;

    case "d":
      sound = "tom-4.mp3";
      break;

    case "j":
      sound = "snare.mp3";
      break;

    case "k":
      sound = "crash.mp3";
      break;

    case "l":
      sound = "kick-bass.mp3";
      break;
    default:

      console.log(key);
      soundExist = false;
  }

  if (soundExist) {
    var audio = new Audio('sounds/' + sound);
    audio.play();
  }
}

function buttonAnimation(currentKey) {

var activeButton;
  if (oldCurrentKey !== null) {
     activeButton = document.querySelector("." + oldCurrentKey);
    if (activeButton !== null) {
      activeButton.classList.remove("pressed");
    }
  }



   activeButton = document.querySelector("." + currentKey);
  if (activeButton !== null) {
    activeButton.classList.add("pressed");
  }

  oldCurrentKey = currentKey;


}

function buttonAnimation2(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 250 );

}
