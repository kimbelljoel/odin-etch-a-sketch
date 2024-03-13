const container = document.querySelector("#grid-container");
let gridCount = 256;
let gridSize = (400/16) - 2 + "px"

function createGrid(){
for (let i = 0; i < gridCount; i++) {
    const div = document.createElement('div');
    div.style.height = gridSize;
    div.style.width = gridSize;
    div.classList.add("grid-item")
    div.addEventListener("mouseover", (event) => {
        div.style.background = "blue";
    });
    container.appendChild(div);
}};

const button = document.querySelector(".button");
button.addEventListener("click", (event) => {
    do {
        gridWidth = parseInt(window.prompt("Please enter a number from 1 to 100", ""), 10);
    } while(isNaN(gridWidth) || gridWidth > 100 || gridWidth < 1);
    container.innerHTML = '';
    gridSize = (400/gridWidth) - 2 + "px"
    gridCount = gridWidth * gridWidth
    createGrid(gridCount, gridSize)
});

createGrid(gridCount, gridSize)