
let b1 = document.getElementById("button1");
let a1 = document.getElementById("answer1");
let c1 = document.getElementById("coll");

let collapse = true;

b1.addEventListener("click", ()=>{
    if(collapse){
        a1.style.display = "block";
        c1.src = "images/icon-minus.svg";
    }
    else{
        a1.style.display = "none";
        c1.src = "images/icon-plus.svg";
    }
    collapse = !collapse;
})
