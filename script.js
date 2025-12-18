const sounds = [
  new Audio("sounds/hue1.mp3"),
  new Audio("sounds/hue2.mp3"),
  new Audio("sounds/hue3.mp3"),
  new Audio("sounds/hue4.mp3"),
  new Audio("sounds/hue5.mp3"),
  new Audio("sounds/hue6.mp3"),
  new Audio("sounds/hue7.mp3")
];

function playSound(number) {
  sounds.forEach(sound => {
    sound.pause();
    sound.currentTime = 0;
  });

  const sound = sounds[number - 1];
  if (sound) {
    sound.play();
  }
}
