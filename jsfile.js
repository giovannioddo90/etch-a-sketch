/*
*
*  Button asking for num squares per side of the grid
*
*/
const bod = document.querySelector('body');
const btnSideSize = document.createElement('button');
btnSideSize.textContent = 'set side size';
btnSideSize.style =
`
margin-bottom: 5px;
font-size: 24px;
height: fit-content
width: fit-content
`;

btnSideSize.addEventListener('click', () => {
  let size = Number(prompt('Set the size of the sides (between 1 and 100)'));

  if (isNaN(size) || size < 1 || size > 100) {
    alert('Must be a number, cannot be less than 1 or over 100');
  }
  else {
    //clear original grid
    container.innerHTML = '';

    // Create new grid
    const boxSize = 800 / size;

    for (let i = 0; i < size * size; i++) {
      const div = document.createElement('div');
      div.style.width = `${boxSize}px`;
      div.style.height = `${boxSize}px`;
      div.style.border = "1px solid blue";
      div.style.boxSizing = "border-box";
      div.classList.add('my-div');
      container.appendChild(div);
    }

    // on hover change my-div border color
    const divsBorder = document.querySelectorAll('.my-div');

    divsBorder.forEach(div => {
      div.addEventListener('mouseover', () => {
        div.style.background = 'black';
      })
    });
  }
});

bod.appendChild(btnSideSize);

// make divs for grid
const container = document.querySelector('.container');
container.parentNode.insertBefore(btnSideSize, container); // places button on top of .container


for (let i = 0; i < 256; i++) {
  const div = document.createElement('div');
  div.style = `
  height: 50px;
  width: 50px;
  border: 1px solid blue;
  box-sizing: border-box;
  `
  div.classList.add("my-div");
  container.appendChild(div);
}

// on hover change my-div border color
const divsBorder = document.querySelectorAll('.my-div');

divsBorder.forEach(div => {
  div.addEventListener('mouseover', () => {
    div.style.background = 'black';
  })
});

//TODO: FINISH EXTRA CREDIT


