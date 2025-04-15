// make divs for grid
const container = document.querySelector('.container'); 

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

