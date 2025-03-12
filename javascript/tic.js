let boxes = document.querySelectorAll(".box");
let count = 0 ;

boxes.forEach(e => {
e.addEventListener("click",()=>{
    count++;
   if(count % 2 == 0){
    e.textContent = "O";
    e.disabled = true;
    checkwinner();
   } else {
    e.textContent = "X";
    e.disabled = true;
    checkwinner();
   }
})    
});
let j = 0 ;

let checkwinner = () =>{
for(let i = 0 ; i<9 ; i++){
if(boxes[i] == "X"){
arr[j] = i ;
   j++;
}
}
}
