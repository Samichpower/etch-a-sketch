const gridContainer = document.querySelector('.main-etchasketch');
const btnGridSize = document.querySelector('.grid-size');
const clearBtn = document.querySelector('.clear');
const currentSize = document.querySelector('.current-size');

let gridSize;
let gridVolume;

for (let i = 0; i < 256; i++) {
  currentSize.textContent = '16x16';
  const newSquare = document.createElement('div');
  newSquare.className = 'grid-item';
  newSquare.style.width = `31.25px`;
  newSquare.style.height = '31.25px';
  gridContainer.appendChild(newSquare);
}

const gridItem = document.querySelectorAll('.grid-item');
gridItem.forEach((item) => {
  item.addEventListener('mouseover', () => {
    item.classList.add('active-item');
  })
})

btnGridSize.addEventListener('click', () => {
  gridContainer.innerHTML = '';
  gridSize = +prompt("How big do you want this?");
  if (gridSize > 100) gridSize = 100;
  gridVolume = gridSize * gridSize;
  currentSize.textContent = `${gridSize}x${gridSize}`;

  for (let i = 0; i < gridVolume; i++) {
    const newSquare = document.createElement('div');
    newSquare.className = 'grid-item';
    newSquare.style.width = `${gridContainer.clientWidth / gridSize}px`;
    newSquare.style.height = newSquare.style.width;
    gridContainer.appendChild(newSquare);
  }

  const gridItem = document.querySelectorAll('.grid-item');
  gridItem.forEach((item) => {
    item.addEventListener('mouseover', () => {
      item.classList.add('active-item');
    })
  })
  clearBtn.addEventListener('click', () => {
    gridItem.forEach((item) => {
      item.classList.remove('active-item');
    })
  })
})

clearBtn.addEventListener('click', () => {
  gridItem.forEach((item) => {
    item.classList.remove('active-item');
  })
  gridContainer.classList.add('main-cleared');
  setTimeout(() => {
    gridContainer.classList.remove('main-cleared');
  }, 300);
})