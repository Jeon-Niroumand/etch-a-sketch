var customIDprefix = "box";
var customIDcntr = 0;

function getNextID() {
    return customIDprefix + customIDcntr++;
}


function makeSquare() // make a square
{
const box = document.createElement('div');
box.setAttribute("id",getNextID());
box.setAttribute("class", "box")
grid.appendChild(box);
}

let depth = 256; // spit out a bunch of squares
let i = 0;
while(i < depth){
    makeSquare();
    i++;
}

//function markSquare()//highlight square on mouse over
//{
//    document.getElementById("box").style.color = "blue";
//}

//document.getElementById("box").onmouseover = markSquare();

//document.getElementById("box").addEventListener("onmouseover",markSquare())
//markSquare()

console.log(getNextID())

