//pointers//
const gridContainer = document.querySelector(".container")
const buttonsContainer = document.querySelector(".buttons")


//create buttons//
const btnBlack = document.createElement("button")
const btnGrey = document.createElement("button")
const btnRGB = document.createElement("button")
const btnSize = document.createElement("button")

//append buttons//
buttonsContainer.appendChild(btnGrey);
buttonsContainer.appendChild(btnBlack);
buttonsContainer.appendChild(btnRGB);
buttonsContainer.appendChild(btnSize);

//edit buttons//
btnGrey.textContent = "Grey";
btnBlack.textContent = "Black";
btnRGB.textContent = "RGB";
btnSize.textContent = "Size";

//create grid//
function createDivs(col, rows) {
    for (let counter = 0; counter < (col * rows); counter++) {
        const gridDiv = document.createElement("div")                           //create a block
        gridContainer.appendChild(gridDiv);                                     //append the block
        gridDiv.classList.add("blokkies");        
        gridContainer.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
       
    }
}

let gridSizePrompt = prompt("Please enter the grid size");
createDivs(gridSizePrompt, gridSizePrompt);

const blokke = document.querySelector(".blokkies");
const newPara = document.createElement("p");
newPara.textContent = ("seeep");
blokke.appendChild(newPara);







