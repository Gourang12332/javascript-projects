
let URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies"
const dropdown = document.querySelectorAll(".dropdown select");
const From = document.querySelector(".from");
const to = document.querySelector(".TO");
let msg = document.querySelector(".msg");
const button = document.querySelector(".submit");
for(let select of dropdown){
    for (code in countryList){
    let newOption = document.createElement("option");
    newOption.innerText = code;
    newOption.value = code;
    select.append(newOption);
    if(select.name === "fromselect" && code == "USD"){
        newOption.selected = "selected";
    } else if(select.name === "To" && code == "INR"){
        newOption.selected = "selected";
    }
    }
    select.addEventListener("change" ,(evt) =>{
        updateflag(evt.target);
    });
}
const updateflag =(element) =>{
let currcode = element.value;
let countrycode  = countryList[currcode];
console.log(element);
let newsrc = `https://flagsapi.com/${countrycode}/flat/32.png`;
if(element.name == "fromselect"){
let image = From.querySelector("img");
image.src = newsrc; 
}
else if(element.name == "To"){
    let image = to.querySelector("img");
    image.src = newsrc; 
    }
}
button.addEventListener("click", async (evt)=>{
evt.preventDefault();
update();
});
const update =async() =>{
    let amt = document.querySelector(".amount input");

if(amt.value =="" || amt.value <=0){
        amt.value = 1 ;
}
let fromcurr = From.querySelector(".fromselect");
let tocurr = to.querySelector(".To");
//console.log(fromcurr.value);
const Base_URL = `${URL}/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json`;
let response = await fetch(Base_URL);
console.log(response);
let data = await response.json();
console.log(data);
let rate = data[tocurr.value.toLowerCase()];

let amount = amt.value*rate;
msg.innerText = `${amt.value} ${fromcurr.value} = ${amount} ${tocurr.value}`;
}

window.addEventListener("load" , update());



