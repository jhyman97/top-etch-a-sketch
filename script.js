const drawGrid = (numberOfSquares) => {
    const grid = document.querySelector(".container");

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
            item.classList.add("active");
        })
    })
}

drawGrid(15);