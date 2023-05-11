const maxSpeed = 150; // The max speed/value to display
const speedMarker = 10; // Marker points
let mileBlockes = [];
for (let i = 0; i <= maxSpeed / speedMarker; i++) {
  mileBlockes[i] = i * speedMarker;
}

const slider = document.getElementById("myRange");
slider.max = maxSpeed;
slider.oninput = function() {
  setSpeedo(this.value);
};

function setSpeedo(currentSpeed) {
  let blockWork = mileBlockes.filter(currentBlock => currentBlock < currentSpeed)
    .map((currentBlock) => `<div class="speedbox"> ${currentBlock}</div>`)
    .join('');
  blockWork = blockWork + `<div class="currentspeedbox glow"
                        style=padding-left:${(currentSpeed*8)+10}px>${currentSpeed}</div>`;
  document.getElementById("speedText").innerHTML = blockWork;
}

window.onload = function() {
  setSpeedo(slider.value);
};
