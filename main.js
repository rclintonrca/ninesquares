var CELL_SHADDED = Math.floor(Math.random() * 9) + 1;
console.log('init cell....' + CELL_SHADDED);

var findNextCell = () => {
    var newCell =  Math.floor(Math.random() * 9) + 1;
    if (newCell === CELL_SHADDED) {
        newCell = findNextCell()
    }
    return newCell
}

var toggleOnCell = (element) => {
    element.classList.remove('cell-not-shadded');
    element.classList.add('cell-shadded');
}

var toggleOffCell = (element) => {
    element.classList.remove('cell-shadded');
    element.classList.add('cell-not-shadded');
}

var toggleShadding = (e) => {
    var currentShadding = e.target.classList.value;
    var cellNumber = e.target.textContent
    if (currentShadding === 'cell-not-shadded') {
        console.log('do nothing; cell ' + cellNumber + ' clicked');
    } else if (currentShadding === 'cell-shadded') {
        toggleOffCell(e.target);

        //turn on new cell
        var nextCell = findNextCell();
        toggleOnCell(document.getElementById('grid-element-' + nextCell));
        
    } else {
        console.warn('no class here');
    }

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
