// explore.js

window.addEventListener('DOMContentLoaded', init);
const synth = window.speechSynthesis;
let voices = [];

function init() {
  synth.addEventListener('voiceschanged', populateVoiceList);

  const btn = document.querySelector('button');
  btn.addEventListener('click', onBtnClick);

  setInterval(changeImage, 250);
}



function populateVoiceList() {
  const voiceSelect = document.getElementById('voice-select');

  voices = synth.getVoices();

  for (let i = 0; i < voices.length ; i++) {
    const newOption = document.createElement('option');
    newOption.text = `${voices[i].name} (${voices[i].lang})`;
    
    if (voices[i].default) {
      newOption.textContent += ' — DEFAULT';
    }

    newOption.setAttribute('data-lang', voices[i].lang);
    newOption.setAttribute('data-name', voices[i].name);
    voiceSelect.add(newOption);
  }
}

function onBtnClick() {
  const voiceSelect = document.getElementById('voice-select');
  const textBox = document.getElementById('text-to-speak');

  const utterance = new SpeechSynthesisUtterance(textBox.value);
  const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');

  for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === selectedOption) {
      utterance.voice = voices[i];
    }
  }

  synth.speak(utterance);
}

function changeImage() {
  const imgElement = document.querySelector('img');

  if (synth.speaking) {
    imgElement.src = 'assets/images/smiling-open.png';
  } else {
    imgElement.src = 'assets/images/smiling.png';
  }
}