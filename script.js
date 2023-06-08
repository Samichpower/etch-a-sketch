const gridContainer = document.querySelector('.grid-container')

let gridSize = prompt("How big do you want this?"); //DON'T GO OVER 50! Shit breaks yo

let gridVolume = gridSize * gridSize;

for (let i = 0; i < gridVolume; i++) {
  const newSquare = document.createElement('div');
  newSquare.className = 'grid-item';
  newSquare.style.width = `${gridContainer.clientWidth / gridSize}px`;
  newSquare.style.height = newSquare.style.width;
  gridContainer.appendChild(newSquare);
}