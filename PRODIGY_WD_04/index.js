
setInterval(update=()=>{
    let date = new Date();
    document.getElementById("clock").innerHTML = mydate(date);
   function mydate(Date)
   {
    let date  = Date.getDate();
    let day  = Date.getDay();

    let hr = Date.getHours();
    let min = Date.getMinutes();
    let sec = Date.getSeconds();
    let amOrpm = hr>=12 ?"pm":"am";

    switch(day)
    {
        case 0: day = "Sunday"; break;
        case 1: day = "Monday";break;
        case 2: day = "Tuesday";break;
        case 3: day = "Wednesday";break;
        case 4: day = "Thursday";break;
        case 5: day = "friday";break;
        case 6: day = "Saturday";break;
    }

    hr = (hr%12) || 12;
    return `${date} , ${day} | ${hr} : ${min} : ${sec} ${amOrpm}`
   }

},1000);    

// Responsive Nav Bar Css:-

let btn = document.getElementById("toggle-button");
let none = document.getElementById("nav-bar");
btn.addEventListener("click",()=>{
    if(none.style.display == "none" || none.style.display=="")
    {
        none.style.display = "initial";
    }
    else
    {
        none.style.display = "none";
    }
})


