    let boxes = document.querySelectorAll(".box ");
    let msg  = document.querySelector(".msg");
    let newgame  = document.querySelector(".newgame");
    let reset  = document.querySelector(".reset");
    let move0 = true;
    let part = document.querySelector(".part");
    const winpatterns = [
        [0,1,2] , [3,4,5] ,[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ];

//   part.addEventListener("click",() =>
//   {
//         part.innerText= "pj";
//   });

    boxes.forEach((box) => {
        box.addEventListener("click", () => {
        if(move0){
        box.innerText = "O";
        move0 = false;
        } else{
            box.innerText = "X";
            move0 = true;
        }
        // box.disabled = true;
        box.style.pointerEvents = "none";
        let iswinner = checkwinner();
        });
        
        });

        let enablebox =() =>{
            for(let box of boxes){
            box.enabled = true;
            box.innerText = "";
            }
        }
 
        const resetgame = () =>{
        move0 = true;
        enablebox();
        msg.classList.add("hide")
        }        
       
        let disablebox =() =>{
        for(let box of boxes){
        box.disabled = true;
        }
        }
        let showwinner=(winner) =>{
        msg.innerText = `congratulations,the winner is ${winner}`;
        msg.classList.remove("hide");
        disablebox();
        }
        
        const checkwinner = () =>
        {
         winpatterns.forEach((pattern) => {
         let val1 = boxes[pattern[0]].innerText ;
         let val2 = boxes[pattern[1]].innerText ;
         let val3 = boxes[pattern[2]].innerText ;
        
         if(val1 != "" && val2 != "" && val3 != ""){
         if(val1 == val2 && val2 == val3){
         
         console.log(`winner is ${val1}`) ;
         showwinner();
         return true;
         } 
        } 
         })
        newgame.addEventListener("click" , resetgame());
        reset.addEventListener("click" , resetgame());
        }
    
