/**
 * TODO: 
 * 
 */


var toggleShadding = (e) => {
    var currentShadding = e.target.classList.value;

    if (currentShadding === 'cell-not-shadded') {
        e.target.classList.remove('cell-not-shadded')
        e.target.classList.add('cell-shadded')
        console.log('toggle');
    } else if (currentShadding === 'cell-shadded') {
        e.target.classList.remove('cell-shadded')
        e.target.classList.add('cell-not-shadded')
        console.log('foo')
    } else {
        console.warn('no class here')
    }
    
}
 
 var cell1 =  document.getElementById('grid-element-1');
 var cell2 =  document.getElementById('grid-element-2');
 var cell3 =  document.getElementById('grid-element-3');
 var cell4 =  document.getElementById('grid-element-4');
 var cell5 =  document.getElementById('grid-element-5');
 var cell6 =  document.getElementById('grid-element-6');
 var cell7 =  document.getElementById('grid-element-7');
 var cell8 =  document.getElementById('grid-element-8');
 var cell9 =  document.getElementById('grid-element-9');

 cell1.addEventListener("click", toggleShadding);
 cell2.addEventListener("click", toggleShadding);
 cell3.addEventListener("click", toggleShadding);
 cell4.addEventListener("click", toggleShadding);
 cell5.addEventListener("click", toggleShadding);
 cell6.addEventListener("click", toggleShadding);
 cell7.addEventListener("click", toggleShadding);
 cell8.addEventListener("click", toggleShadding);
 cell9.addEventListener("click", toggleShadding);
 