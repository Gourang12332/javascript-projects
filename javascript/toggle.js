const ham = document.getElementById("ham");
const toggle = document.getElementById("toggle");

let first = -1;
ham.addEventListener("click", (e)=>{
if(first == -1){
    toggle.classList.remove("hide");
    first = 0;
}
else if(first == 0){
    toggle.classList.add("hide");
    first = -1; 
}
})