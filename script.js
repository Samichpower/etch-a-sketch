const gridContainer = document.querySelector('.grid-container')
console.log(gridContainer.clientWidth);

for (let i = 0; i < 256; i++) {
  const newSquare = document.createElement('div');
  newSquare.className = 'grid-item';
  newSquare.style.width = `${gridContainer.clientWidth / 16}px`;
  newSquare.style.height = newSquare.style.width;
  gridContainer.appendChild(newSquare);
}