const container = document.querySelector(".container");

function drawGrid(grids) {
    let totalGrids = Math.pow(grids, 2);
    let divSize = 100 / grids;

    for (let i = 0; i < totalGrids; i++) {
        const item = document.createElement("div");
        item.classList.add("items");
        item.style.flexBasis = `${divSize}%`
        container.appendChild(item);
    }

}

function eraseGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
    opc = 1.1
}

function myInput() {

    let isNotANumber = true;
    let _input;
    while (isNotANumber) {
        _input = prompt("Enter a new grid size ( >=16 and <= 100");
        const num = Number(_input);

        if (_input === "" || Number.isNaN(num) || num < 16 || num > 100) {
            alert("Please enter a valid number")
        }
        else{
            isNotANumber = false;
        } 
    }
    return +_input;

}

let opc = 1.1;
const myOpacity = () => {
    opc -= 0.1;
    if (opc === 0){
        opc = 0
    }
    return opc;
}

const red = () => Math.floor(Math.random() * 255);
const green = () => Math.floor(Math.random() * 255);
const blue = () => Math.floor(Math.random() * 255);



let grids = 16;

drawGrid(grids);

container.addEventListener("mouseover", (e) => {

    const target = e.target;
    opc = myOpacity();
    if (target.classList.contains("items")) {
        target.style.backgroundColor = `rgb(${red()},${green()},${blue()})`;
        target.style.opacity = `${opc}`
    }

})


const changeGridSizeButton = document.querySelector(".myBtn");

changeGridSizeButton.addEventListener("click", (e) => {

    e.stopPropagation()
    let _input = myInput();
    if (_input != null) {
        eraseGrid(grids);
        grids = _input;
        drawGrid(grids);
    }
})
