// audio.js
function triggerAudio(cadence, location) {
  if (cadence > 80) {
    playTrack('high-cadence.mp3');
  } else if (location === 'checkpoint-3') {
    playTrack('checkpoint-theme.mp3');
  }
}

function playTrack(filename) {
  const audio = new Audio(`/audio/${filename}`);
  audio.play();
}
