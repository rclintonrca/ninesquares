var CELL_SHADDED = Math.floor(Math.random() * 9) + 1;
var CLICKS_THRESHOLD = Math.floor(Math.random() * 5) + 10;
var CLICKS = 0;
var DELAY_MS = 500;

console.log('init cell....' + CELL_SHADDED);

function findNextCell() {
    var newCell =  Math.floor(Math.random() * 9) + 1;
    if (newCell === CELL_SHADDED) {
        newCell = findNextCell()
    }
    return newCell
}

function toggleOnCell(element) {
    element.classList.remove('cell-not-shadded');
    element.classList.add('cell-shadded');
}

function toggleOffCell(element) {
    element.classList.remove('cell-shadded');
    element.classList.add('cell-not-shadded');
}

async function toggleShadding(e) {
    if (CLICKS < CLICKS_THRESHOLD) {
        console.log("sleep");
        await new Promise(r => setTimeout(r, DELAY_MS));
    }
    
    var currentShadding = e.target.classList.value;
    var cellNumber = e.target.textContent
    if (currentShadding === 'cell-not-shadded') {
        console.log('do nothing; cell ' + cellNumber + ' clicked');
    } else if (currentShadding === 'cell-shadded') {
        toggleOffCell(e.target);

        //turn on new cell
        CELL_SHADDED = findNextCell();
        // console.log(nextCell, )
        toggleOnCell(document.getElementById('grid-element-' + CELL_SHADDED));
        
    } else {
        console.warn('no class here');
    }
    CLICKS++;

}


var arr = Array.from(Array(10).keys());
arr.splice(0, 1);

arr.map(el => {
    console.log(el);
    var _cell = document.getElementById('grid-element-' + el);
    _cell.addEventListener("click", toggleShadding);
    if (el === CELL_SHADDED) {
        _cell.classList.remove('cell-not-shadded');
        _cell.classList.add('cell-shadded')
    }
});
