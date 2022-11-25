
function makeSquare() // make a box
{
const box = document.createElement('div');
grid.appendChild(box);
}

let rows = 256; // stacks boxes on top of one another
let i = 0;
while(i < rows){
    makeSquare();
    i++;
}

let columns = rows







