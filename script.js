const GRID_DIMENSION = 32;

function createGrid(dimension) {
    let gridContainer = document.querySelector('.grid-container');
    gridContainer.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;

    for (let row = 0; row < dimension; row++)
        for (let column = 0; column < dimension; column++) {
            let pixel = document.createElement('div');
            pixel.addEventListener('mouseover', (event) => {
                pixel.style.backgroundColor = "gray";
            })
            pixel.classList.add("pixel");
            gridContainer.appendChild(pixel);

            // let color = "#" + Math.floor(Math.random()*16777215).toString(16);
            // pixel.style.backgroundColor = color;
        }
}

function clearGrid(){
    let elements = document.querySelectorAll('.grid-container div');
    for (element of elements){
        element.remove();
    }
}

createGrid(GRID_DIMENSION);

let newGridButton = document.getElementById('new-grid-button');
newGridButton.addEventListener('click', (event) => {

    let gridSize = 0;

    do {
        gridSize = prompt("Insert a new dimension for the grid:");
    } while (isNaN(gridSize) || gridSize < 1 || gridSize > 100)

    clearGrid();
    createGrid(gridSize);

})