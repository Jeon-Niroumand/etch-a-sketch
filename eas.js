var customIDprefix = "box"; // make custom ids for each box
var customIDcntr = 0;
function getNextID() 
{
return customIDprefix + customIDcntr++;
}

function makeBox() // make a box
{
const box = document.createElement('div');
box.setAttribute("id",getNextID());
box.setAttribute("class", "box");
grid.appendChild(box);
}

let depth = 16*16; // spit out a bunch of boxes
let i = 0;
while(i < depth){
    makeBox();
    i++;
}

document.onmouseover = function(e) // mark the boxes now
{
   console.log(e.target.id);
   if ((e.target.id) != "grid") {
   document.getElementById(e.target.id).style.backgroundColor = "purple";
   }
}