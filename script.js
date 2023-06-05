const gridContainer = document.querySelector('.grid-container')

for (let i = 0; i < 256; i++) {
  const newSquare = document.createElement('div');
  newSquare.className = 'grid-item';
  gridContainer.appendChild(newSquare);
}