// expose.js

window.addEventListener('DOMContentLoaded', init);
var jsConfetti = new JSConfetti();


function init() {
  // TODO
  const selectElement = document.getElementById('horn-select');
  selectElement.addEventListener('change', changeHorn);

  const volumeElement = document.getElementById('volume');
  volumeElement.addEventListener('input', updateVolume)

  const buttonElement = document.querySelector('button');
  buttonElement.addEventListener('click', clickButton);
}



function changeHorn(w) {
  const imgElement = document.querySelector('img');
  const audElement = document.querySelector('audio');

  let imgPath = 'assets/images/' + w.target.value + '.svg';
  let audPath = 'assets/audio/' + w.target.value + '.mp3';

  imgElement.src = imgPath;
  audElement.src = audPath;
}

function updateVolume(w) {
  const audElement = document.querySelector('audio');
  const audImgElement = document.querySelectorAll('img')[1];
  
  let currAudioValue = w.target.value;

  if (currAudioValue == 0) {
    audImgElement.src = 'assets/icons/volume-level-0.svg';
  } else if (currAudioValue >= 1 && currAudioValue < 33) {
    audImgElement.src = 'assets/icons/volume-level-1.svg';
  } else if (currAudioValue >= 33 && currAudioValue < 67) {
    audImgElement.src = 'assets/icons/volume-level-2.svg';
  } else if (currAudioValue >= 67) {
    audImgElement.src = 'assets/icons/volume-level-3.svg';
  }

  audElement.volume = currAudioValue / 100;
}

function clickButton(w) {
  const audElement = document.querySelector('audio');
  const selectElement = document.getElementById('horn-select');

  if (selectElement.value == 'party-horn') {
    jsConfetti.addConfetti();
  }

  audElement.play();
}