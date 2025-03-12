let his = document.querySelectorAll(".hi");
let number = document.querySelector(".number");
let submit = document.querySelector(".submit");
submit.addEventListener("click" ,() =>{
his.forEach((hi) =>{
    console.log(hi.value);
});
})
let count = 0;
let num = number;
while(num/10 != 0){
    count++;
    num = num /10 ;
}
if(count == 10){
    console.log(number);
} else {
    alert("The number should be of 10 digits");
}