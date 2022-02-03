// TODO - Select all of the drum elements and add event listener.
// Add animation when a button is clicked
// play music

// TODO with VOLUME SLIDER control!!! - Check var! \\
var audio_volume = 0.6;

// BUTTON ANIMATION METHOD //
const animate = (key) => {
   const currentKey = document.querySelector(`.${key}`)
   currentKey.classList.add('pressed')
   setTimeout(() => {
       currentKey.classList.remove('pressed')
   }, 250)
}

///// ADDING SOUNDS - creating audio filepath for sounds /////
const playMusic = (path) => {
    const audio = new Audio(path);
    audio.volume = audio_volume
    audio.play();
}

// MAKING addEventListener/callback for ALL key press buttons/elements
document.addEventListener("keypress", (event) => {
    const triggeredKey = event.key;
    makeSound(triggeredKey)
    animate(triggeredKey)
})

// Making a Method in order to make the volume slider responsive to users interaction. 

const slider = document.getElementById("volume__slider")
slider.oninput = (event) => {
    audio_volume = event.target.value / 100
}

// Using a SWITCH case //
const makeSound = (key) => {

switch (key) {
    case "q":
        playMusic("sounds/boom.wav");
        break;
    case "w":
        playMusic("sounds/clap.wav");
        break;
    case "e":
        playMusic("sounds/hihat.wav");
        break;
    case "r":
        playMusic("sounds/snare.wav");
        break;
    case "t":
    playMusic("sounds/openhat.wav");
    break;
    case "y":
        playMusic("sounds/ride.wav");
        break;
    default:
        console.log("HEY! wrong beat pal!!")
    }
}

// Using a callback function - passing out a function inside a function using const. //
const pressDrumClick = (event)=> {
    var innerHTML = event.target.innerHTML;
    animate(innerHTML)
    makeSound(innerHTML)
}

// FOR LOOP with addEventListener //
// QUERY SELECTOR ALL //
var drums = document.querySelectorAll(".drum")
for(let i = 0; i <drums.length;i++) {
    drums[i].addEventListener("click", pressDrumClick)
}