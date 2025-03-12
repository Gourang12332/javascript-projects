// function to add to numbers
// the value 5 is not stored in sum innsted it is just returning 5
// let arr = [1,2,3,4,5]
// arr.forEach((val)=>{
// console.log(val)
// })
// indexes can be acessed by for in loop



// printing square of each arra elemnt
// let arr1 = [1,2,3,4,5,6];
// arr1.forEach((val)=>{
//     console.log(val*val);
// })

// let arr =[23,92,99,96,43,44,90];
// let a = arr.filter((a)=>{
// return a>90;
// })
// console.log(a);

// let n = prompt("upto what number?")

// let arr=[];
// for(let i =0 ; i<n;i++){
// arr[i] = i+1 ;
// }

// console.log(arr)    
// let sum = arr.reduce((h1,h2) =>{
// return h1 + h2;
// })
// let product = arr.reduce((h1,h2) =>{
//     return h1 * h2;
//     })
// console.log("THE SUM OF THE ARRAY ELEMNTS  " + sum)    ;
// console.log("THE PRODUCT OF THE ARRAY ELEMNTS  " + product)    ;
// let idx = 0;
// let divs = document.querySelectorAll(".box");
// divs.forEach(div => {
// div.innerText = `th is unique ${idx}` 
// idx++;   
// });
// let div2 = document.querySelector(".box1");
// console.log(div2)
// let val = div2.getAttribute("class")
// console.log(val)
// div2.setAttribute("class","hero")

// console.log(div2.getAttribute("class"));
// console.log(div2)
// let btn = document.createElement("button")
// btn.style.height = 100 ;
// btn.style.width = 100 ;
// btn.textContent = "click me";
// btn.style.backgroundColor ="red";
// btn.style.color = "white";

// document.querySelector("body").prepend(btn)

// let para = document.createElement("p");
// para.setAttribute("class","content")

// para.innerText = "HI this is a para";
// document.querySelector("body").append(para)
// para.setAttribute("class","content")
// para.classList.add("newcontent")
// para.setAttribute("class","newcontent") // dont use it as it overwrite the previous class

// TOGGLING BUTTON
// let btn = document.querySelector("button");
// let para = document.querySelector("p");
// let currmode = "light";
// let body = document.querySelector("body");
// btn.addEventListener("click",()=>{
// if(currmode === "dark"){
// currmode = "light";
// body.style.backgroundColor = "white";
// para.style.color = "black"
// } else  {
// currmode = "dark";
// body.style.backgroundColor = "black";
// para.style.color = "white"
// }
// console.log(currmode);  
// })
// let data = "aman";

// class User {
//     name;
//     email;

//     constructor(name,email){
//         this.name = name;
//         this.email = email;
//         }

// viewdata(){
//     console.log(u1.name);
//     console.log(u1.email);
//     console.log(data);
// }
// }
// class Admin extends User{
// constructor(name,email){
// super();
// this.name = name;
// this.email = email;
// }
// editdata(newname){
// data = newname;
// console.log(data);
// } 
// }
// let u1 = new User("aman","aman@gmail.com");
// let admin1 = new Admin("aman","aman@gmail.com");


//  function hello(){
// console.log("Hello");
//  }

// //  setTimeout(hello,2000);
// console.log("1");
// console.log("1");
// console.log("1");
// setTimeout(() => {
//     console.log("hello");
// } , 4000);
// console.log("1");
// console.log("1");
// console.log("1");

// callback
// function sum(a,b){
// console.log(a+b);
// }

// function calculator(a,b,sumcallback){
// sumcallback(a,b);
// }
// calculator(1,2,sum);

// promise chain and callback hell
// function getdata(data){
// return new Promise((resolve,reject) =>{
// setTimeout( ()=>{
//     console.log(data);
//     resolve("success");
// },2000)

// })
// }
// //  getdata(1).then((res) =>{
// //  getdata(2).then((res)=>{

// //     })
// //     })
// console.log("getitng data1")
// getdata(1).then((res) =>{
//     console.log("getitng data2")
//     return getdata(2);
// })

// .then((res)=>{
//     console.log("getitng data3")
//     return getdata(3);
// })


// .then((res)=>{
   
//     console.log(res);
// })



// // callback hell
// getdata(1,()=>{
// getdata(2,()=>{
//     getdata(3);
// });
// });


// let promise = new Promise((resolve,reject)=>{
//     console.log("I am a promise");
//     resolve("hello suceess");
//     // reject("some error");
// })


// function getdata(dataId,getnextdata){
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             // console.log(dataId);
//             // resolve("sucess");
//             reject("error")
//         },4000);
//     })
// }

// const getpromise =() =>{
//     return new Promise((resolve,reject) =>{
//         console.log("I am a promise");
//         // resolve("success");
//         reject("error");
    
//     });
// }
// let promise = getpromise();
// promise.catch((err)=>{
// console.log("rejected" ,err);
// });
// promise.then((res)=>{ // res is result that is the words which we have passed in resolve functions
//     console.log("rejected" ,err);
//     });

// function asynFunc1(){
//     return new Promise((resolve,reject) =>{
//         setTimeout(
//             () =>{
//             console.log("data 1");  
//             resolve("success");
//             }
//         ,4000);
//     })
// } 
// function asynFunc2(){
//     return new Promise((resolve,reject) =>{
//         setTimeout(
//             () =>{
//             console.log("data2");  
//             resolve("success");
//             }
//         ,4000);
//     })
// } 
// console.log("Fetching data1 ....");
// // let p1 = asynFunc1();    //this is not required
// asynFunc1().then((res)=>{
// console.log("Fetching data2...")
// asynFunc2().then((res) =>{
    
// })

// })


// question  why this is not presenting any Data
// function asynFunc1(){
//     // return new Promise((resolve,reject) =>{
//         setTimeout(
//             () =>{
//             console.log("data 1");  
//             // resolve("success");
//             }
//         ,4000);
//     // })
// } 
// function asynFunc2(){
//     // return new Promise((resolve,reject) =>{
//         setTimeout(
//             () =>{
//             console.log("data2");  
//             // resolve("success");
//             }
//         ,4000);
//     // })
// } 
// console.log("Fetching data1 ....");






// async await - one more way instead  of callback hell and promise chain
// it gives you access that first first work will be completed after that only second work will be completed
// async functionn will always return a promise
// await will stop the execution untill the promise is settle and await will always be used in the async functions
// function api() {
//     return new Promise((resolve,reject) =>{
//     setTimeout(
//         ()=>{
//         console.log("weather data");
//         resolve(200);
//         },2000)
//     }
// )
// }

// async function getWeather(){
//      await api() ;
//     console.log("wow it is good");
// }


// function getdata(data){
// return new Promise((resolve,reject) => {
//     setTimeout(() =>{
//         console.log(data); 
//         resolve("success");
//     } ,2000);
// });
// }
// (async function(){
// console.log("getting data 1....");
// await getdata(1);
// console.log("getting data 2....");
// await getdata(2);
// console.log("getting data 3....");
// await getdata(3);
// console.log("getting data 4....");
// await getdata(4);
// console.log("getting data 5....");
// await getdata(5);
// console.log("getting data 6....");
// await getdata(6);
// })();

// to use async await we have to made a unnecessary call so to remove this problem we k=make use of IIFE
//IIFE   immediately invoked function expression

// it is a function which get called immediately as soon as it is defined


// FETCHING API
// APPLICATIONN PROGRAMMING INTERFACE

// let promise = fetch(url,[options])

// const player = {
// name : "aman" ,
// age : 18 ,
// printing() {
//     console.log("hello");
// }
// }
// const rajat = {
//     name:"rajat",
//     stop(){
//     console.log("stop yurself");
//     }
// }
// rajat.__proto__ = player; // to acces the properties of other objects
// rajat.printing();





