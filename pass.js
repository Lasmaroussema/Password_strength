let input = document.querySelector("input");
const n1 =/.{10,}/;
const n2 =/[a-z]/;
const n3 =/[0-9]/;
const n4 =/[A-Z]/;
const n5 =/[^A-Za-z0-9]/;

input.addEventListener("keyup", (event)=>
{
    if (n1.test(input.value))
    {
        document.querySelector(".conditions").children[0].style.textDecoration = "line-through";
        document.querySelector(".conditions").children[0].style.color = "green";
    }
     else {
        document.querySelector(".conditions").children[0].style.textDecoration = "none";
        document.querySelector(".conditions").children[0].style.color = "rgb(33, 33, 33)";
    }
if (n2.test(input.value))
    {
        document.querySelector(".conditions").children[1].style.textDecoration = "line-through";
        document.querySelector(".conditions").children[1].style.color = "green";
    }
     else {
        document.querySelector(".conditions").children[1].style.textDecoration = "none";
        document.querySelector(".conditions").children[1].style.color = "rgb(33, 33, 33)";
    }
    if (n3.test(input.value))
    {
        document.querySelector(".conditions").children[2].style.textDecoration = "line-through";
        document.querySelector(".conditions").children[2].style.color = "green";
    }
    else {
        document.querySelector(".conditions").children[2].style.textDecoration = "none";
        document.querySelector(".conditions").children[2].style.color = "rgb(33, 33, 33)";
    }
    if (n4.test(input.value))
    {
        document.querySelector(".conditions").children[3].style.textDecoration = "line-through";
        document.querySelector(".conditions").children[3].style.color = "green";
    }
    else {
        document.querySelector(".conditions").children[3].style.textDecoration = "none";
        document.querySelector(".conditions").children[3].style.color = "rgb(33, 33, 33)";
    }
    if (n5.test(input.value)) {
        document.querySelector(".conditions").children[4].style.textDecoration = "line-through";
        document.querySelector(".conditions").children[4].style.color = "green";
    }
    else {
        document.querySelector(".conditions").children[4].style.textDecoration = "none";
        document.querySelector(".conditions").children[4].style.color = "rgb(33, 33, 33)";
    }
})