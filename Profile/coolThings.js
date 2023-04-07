const hangmanImages = ['/resource/hangman.png', '/resource/hangman1.png', '/resource/hangman2.png'];
let hangmanIndex = 0;
const hangmanImage = document.getElementById('hangman-image');

function changeHangmanImage() {
  hangmanIndex++;
  if (hangmanIndex >= hangmanImages.length) {
    hangmanIndex = 0;
  }
  hangmanImage.src = hangmanImages[hangmanIndex];
}

document.getElementById('hangman-button').addEventListener('click', changeHangmanImage);

const powballImages = [
  "/resource/Powball1.png",
  "/resource/Powball2.png",
  "/resource/Powball3.png",
  "/resource/Powball4.png"
];

let powballIndex = 0;
const powballImage = document.getElementById('powball-image');

function changePowballImage() {
  powballIndex++;
  if (powballIndex >= powballImages.length) {
    powballIndex = 0;
  }
  powballImage.src = powballImages[powballIndex];
}

document.getElementById('powball-button').addEventListener('click', changePowballImage);