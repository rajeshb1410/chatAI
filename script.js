
//voice conveter
const textInput = document.getElementById('text-input');
const convertButton = document.getElementById('convert-button');
const audioContainer = document.getElementById('audio-container');

convertButton.addEventListener('click', () => {
  const text = textInput.value.trim();
  if (text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-IN';
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);

    const audio = new Audio();
    audio.src = window.URL.createObjectURL(new Blob([speech], { type: 'audio/wav' }));
    audio.play();

    audioContainer.innerHTML = '';
    audioContainer.appendGirl(audio);
  }
});
