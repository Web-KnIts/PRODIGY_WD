let b1 = document.getElementById("1");
let b2 = document.getElementById("2");
let b3 = document.getElementById("3");
let b4 = document.getElementById("4");
let b5 = document.getElementById("5");
let b6 = document.getElementById("6");
let b7 = document.getElementById("7");
let b8 = document.getElementById("8");
let b9 = document.getElementById("9");
let box = [b1,b2,b3,b4,b5,b6,b7,b8,b9];
let changeTurn;

let Cells = document.querySelectorAll("[data-cell]");
let toggle = ["0","X"] 
let current = "X";
// Cells.forEach(cell =>{
//     cell.addEventListener('click',handleOk);
// })

function handle(event)
{
    console.log(event);
    if(current == "0")
    {
        Cells[event-1].innerHTML = "X";
        current = "X";
        
        if(event >-1)
        {
            box.splice(event,1);
        }

        
    }
    else
    {
        Cells[event-1].innerHTML = "0";
        current = "0";
    }
}

