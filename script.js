let randomColorMode = false;
let shadingMode = false;
let gridDimensions = 16;
let currentOpacity = 0;

const drawGrid = (numberOfSquares) => {
    currentOpacity = 0;
    const grid = document.querySelector(".container");
    grid.innerHTML = "";

    for(let i = 1; i <= numberOfSquares * numberOfSquares; ++i) {
        const box = document.createElement("div");
        const boxWidth = 100 / numberOfSquares;
        box.classList.add("item");
        box.style.flex = `1 1 ${boxWidth}%`;
        grid.appendChild(box);
    }

    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.classList.add("active-item");
            
            if(randomColorMode) {
                const randomColor = Math.floor(Math.random()*16777215).toString(16);
                item.style.backgroundColor = `#${randomColor}`;
            }

            if(shadingMode) {
                item.style.opacity = currentOpacity;
                currentOpacity += 0.1;
            }
        })
    })
}

const getNewGrid = () => {
    gridDimensions = prompt("How many squares per side for the new grid?");

    if(gridDimensions > 100) gridDimensions = 100;

    drawGrid(gridDimensions);
}

drawGrid(16);

document.querySelector(".reset").addEventListener("click", () => getNewGrid());
document.querySelector(".random-color").addEventListener("click", () => {
    randomColorMode = !randomColorMode;
    document.querySelector(".random-color").classList.toggle("active-option");
    drawGrid(gridDimensions)
});
document.querySelector(".shading").addEventListener("click", () => {
    shadingMode = !shadingMode;
    // currentOpacity = 0;
    console.log(`shading mode: ${shadingMode}`)
    document.querySelector(".shading").classList.toggle("active-option");
    drawGrid(gridDimensions);
})

