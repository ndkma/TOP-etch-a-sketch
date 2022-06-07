//pointers//
const gridContainer = document.querySelector(".container")
const buttonsContainer = document.querySelector(".buttons")


//create buttons//
const btnBlack = document.createElement("button")
const btnGrey = document.createElement("button")
const btnRGB = document.createElement("button")
const btnSize = document.createElement("button")
const btnErase = document.createElement("button")

//append buttons//
buttonsContainer.appendChild(btnGrey)
buttonsContainer.appendChild(btnBlack)
buttonsContainer.appendChild(btnRGB)
buttonsContainer.appendChild(btnSize)
buttonsContainer.appendChild(btnErase)

//edit buttons//
btnGrey.textContent = "Grey";
btnBlack.textContent = "Black";
btnRGB.textContent = "RGB";
btnSize.textContent = "Size";
btnErase.textContent = "Erase";

//get grid size, check if number between 4 and 40

let gridSize = prompt("Please choose the size of your grid between 4 and 40");
    
while (isNaN(gridSize) || gridSize > 40 || gridSize < 4) {
    alert ("These parameters are not acceptable...");
    gridSize = prompt("Please choose the size your grid between 4 and 40");
}

//create actual blocks
function createDivs(col, rows) {
    for (let counter = 0; counter < (col * rows); counter++) {
        const gridDiv = document.createElement("div")                           //create a block
        gridContainer.appendChild(gridDiv);                                     //append the block
        gridDiv.classList.add("blokkies");        
        gridContainer.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
       
    }
}

createDivs(gridSize, gridSize);


//Black Button ACTIVATE//
btnBlack.addEventListener('click', activateBlack);

function activateBlack() {

    const smallBoxes = document.querySelectorAll('.blokkies');
    smallBoxes.forEach(makeBlack);

function makeBlack(item) {
    item.addEventListener('mouseover', () => {
        item.style.removeProperty('background');
        item.style.background = 'black';
    })
}
}

//Grey Button ACTIVATE//
btnGrey.addEventListener('click', activateGrey);

function activateGrey() {
    const smallBoxes = document.querySelectorAll('.blokkies');
    smallBoxes.forEach(makeGrey);

function makeGrey(item) {
    item.addEventListener('mouseover', () => {
        item.style.removeProperty('background');
        item.style.background = 'grey';
    })
}
}

//Erase Button ACTIVATE//
btnErase.addEventListener('click', activateErase);

function activateErase() {

    const smallBoxes = document.querySelectorAll('.blokkies');
    smallBoxes.forEach(erase);

function erase(item) {
    item.addEventListener('mouseover', () => {
        item.style.removeProperty('background');
    })
}
}

//RGB Button ACTIVATE//
btnRGB.addEventListener('click', activateRGB);

function activateRGB() {

    const smallBoxes = document.querySelectorAll('.blokkies');
    smallBoxes.forEach(makeRandomColor);

function makeRandomColor(item) {
    item.addEventListener('mouseover', () => {
        item.style.removeProperty('background');
        let R = Math.floor(Math.random() * 255);
        let G = Math.floor(Math.random() * 255);
        let B = Math.floor(Math.random() * 255);
        item.style.background = `rgb(${R}, ${G}, ${B})`
    })
}
}









