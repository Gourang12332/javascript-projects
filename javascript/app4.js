// paste the link sending request to which will give the data to the browser
// fetch method is used to fetch data
// fetch makes use of requset and response and returns the promise :: it should be remember that promisse is an object
// const URL = "https://cat-fact.herokuapp.com/facts";
// let factpara = document.querySelector(".fact");
// let facts = document.querySelector(".facts");

// facts.addEventListener("click",async()=>{
//     console.log("Gettinng data.....")
//     let promise = await fetch(URL); // this request is get request
//     let data = await promise.json(); // right now the return data is in non readable  format
//     factpara.innerText = data[2].text;
// })
// const getfacts = async () =>{
//     console.log("Gettinng data.....")
//     let promise = await fetch(URL); // this request is get request
//     let data = await promise.json(); // right now the return data is in non readable  format
//     factpara.innerText = data[0].text;
//     } 

// AJAX = asynchronous javascript and xml  // the retunrn data format is in xml in older times but now in json
// json is javascript object notation 
// json() method is used to parse the input body text as JSON.(input is json , output is js object);
// as json and fetch both methods return promise that's why they both are asynchronous methods .


// PROMISE CHAIN
// they are to handle asynchrounous calls

// (function ()
// {
// fetch(URL).then((response) =>{
//     return response.json(); 
// }).then((data)=>
// {
// console.log(data[0].text);
// })
// })();



// Request and response 
// https request verbs like get , post, to update patch request is use;
// https response status code : 404 error page not found
//  400 error code api don't exist
// 200 successful
// headers are just some extra informations

//  homework problem
let promise  = fetch (URL,"POST");
promise.then((response) =>{
data = response.json();
console.log(data[0]);
})

