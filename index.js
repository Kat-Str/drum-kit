var buttons = document.querySelectorAll(".drum");

function playSound(sound) {
  new Audio(`./sounds/${sound}.mp3`).play();
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    var soundType = button.getAttribute("sound-type");
    playSound(soundType);
  });
});
