const container = document.querySelector('#container');
let randomColorBtn = document.querySelector('#random');
let btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  let n = prompt("How many squares a side? Please choose from 1-100.");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  if (n <= 100 && n >= 1) {
    addSquare(n);
  } else {
    return;
  }
});


function addSquare(n) {

  const setWidth = '1300'
  const setHeight = '550'

  container.style.width = setWidth + 'px';
  container.style.height = setHeight + 'px';

  function changeBoxColor(e) {
    e.target.style.backgroundColor = "black";
  }

  let children = container.children;


  function changeBoxColorRandom(e) {
    let r = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    e.target.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  }

  
  for (i = 1; i <= n; i++) {

    const firstSquare = document.createElement('div');

    firstSquare.style.height = (setHeight / n) + 'px';
    firstSquare.style.width = (setWidth / n) + 'px';

    firstSquare.style.cssFloat = "left";
    firstSquare.classList.add('square');
    firstSquare.style.backgroundColor = 'lightgrey';

    container.appendChild(firstSquare);
    firstSquare.addEventListener('mouseover', changeBoxColor);


    for (j = 1; j < n; j++) {

      const newSquare = document.createElement('div');

      newSquare.style.height = (setHeight / n) + 'px';
      newSquare.style.width = (setWidth / n) + 'px';

      newSquare.style.cssFloat = "right";
      newSquare.classList.add('square');
      newSquare.style.backgroundColor = 'lightgrey';

      container.appendChild(newSquare);


      randomColorBtn.addEventListener('click', () => {
        newSquare.addEventListener('mouseover', changeBoxColorRandom);
        firstSquare.addEventListener('mouseover', changeBoxColorRandom);       
      });
      newSquare.addEventListener('mouseover', changeBoxColor);
    }
  }

}

addSquare(16);
