let vardiv = document.querySelector(".gridcontainer");
let start = document.querySelector(".start");
let clear = document.querySelector(".clear");
let random = document.querySelector(".random");
let divs;
let color = ["red","white","green","yellow","pink","aqua","bisque","orange","purple"];
console.log(color[0]);
// async await not workks on eventlistenrs
 
 start.addEventListener("click",()=>{
divs = +prompt("Enter the number of divs you want in each row");

vardiv.style.cssText = "grid-template-columns : repeat("+divs+",1fr); grid-template-rows : repeat("+divs+",1fr);"
//var styles = window.getComputedStyle(vardiv);
//var width = parseFloat(styles.getPropertyValue("width"));
//var height = parseFloat(styles.getPropertyValue("height"));

for(let j = 0 ;j < (divs*divs) ; j++){
//for(let i =1 ; i <= divs ;i++){
   let newdiv = document.createElement('div');
   
   //newdiv.style.width = width/(divs+.2) + "px";
   //newdiv.style.height = height/(divs+.2) + "px";
    
    newdiv.style.cssText = " border:2px solid black;"
    
    //newdiv.style.border = " 2px solid black";
  // newdiv.style.boxSizing = "border-box";
   
  vardiv.append(newdiv);

   
}

//}

let all = document.querySelectorAll(".gridcontainer div");
console.log(all);

all.forEach((e)=>{
e.addEventListener("mouseover",()=>{
   e.style.backgroundColor = "red";
})
})
clear.addEventListener("click",()=>{
   all.forEach((e)=>{
      e.addEventListener("mouseover",()=>{
         e.style.backgroundColor = "white";
      })
      })
})
random.addEventListener("click",()=>{
   let x = randomcolor();
   all.forEach((e)=>{
      var styles = window.getComputedStyle(e);
      
     
      e.addEventListener("mouseover",()=>{
         e.style.backgroundColor = x;
      })
     
      })
})

const randomcolor = () =>{
 let random = Math.random();
 random = Math.floor(random*10);
 console.log(random);
 return color[random];
}

})







