let URL2 = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
let From = document.querySelector("#From");
let To = document.querySelector("#To");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let getexchange = document.querySelector(".exc");
let amount = document.querySelector("#amt");
let message = document.querySelector(".msg");
for (const currcode in countryList) {
    let newoption = document.createElement("option");
    newoption.value = currcode;
    newoption.innerText = currcode ;
    From.append(newoption);
}
for (const currcode in countryList) {
    let newoption = document.createElement("option");
    newoption.value = currcode;
    newoption.innerText = currcode ;
    To.append(newoption);
}
From.addEventListener("change",()=>{
    currcode = From.value;
    console.log(currcode);
    councode = countryList[currcode];
    console.log(councode);
    newsrc = `https://flagsapi.com/${councode}/flat/64.png`;
    console.log(newsrc);
    let image = left.querySelector("img");
    image.src = newsrc;
});
To.addEventListener("change",()=>{
    currcode = To.value;
    console.log(currcode);
    councode = countryList[currcode];
    console.log(councode);
    newsrc = `https://flagsapi.com/${councode}/flat/64.png`;
    console.log(newsrc);
    let image = right.querySelector("img");
    image.src = newsrc;
});

getexchange.addEventListener("click", async ()=>{
if(amount.value == "" || amount.value <= 0){
    amount.value = 1;
    amount.innerText = 1;
}

console.log(From.value);
console.log(To.value);
let BaseURL = `${URL2}/${From.value.toLowerCase()}/${To.value.toLowerCase()}.json`;
console.log(BaseURL);
let response = await fetch(BaseURL);
let data1 =  await response.json();
console.log(data1);
let req = data1[To.value.toLowerCase()];
req = req*amount.value ;
console.log(req);
message.innerText = `${amount.value} ${From.value} equals ${req} ${To.value} `;
})