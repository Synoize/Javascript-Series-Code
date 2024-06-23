// for learn docs ---> mdn docs --->> https://developer.mozilla.org/en-US/docs/Web/JavaScript


// const { reject } = require("lodash");


//******************************************************* DAY-1 **********************************************************

// document.write("Hey! I'm Synoize.")
// console.log("hello javascript");
// alert("please subscribe my channel")

//----------------------------------------
// let a = prompt("Enter first number",);
// let b = prompt("Enter second number",);
// let sum = parseInt(a) + parseInt(b)
// console.log("addition is :",sum);

//variables**********************************

// var a=4
// let b=9
// const c=8
// console.log(a)

//datatypes**********************************

// let num1 =5
// let num2 = 6.89
// let str = "chintu"
// let bool = true
// let a=null
// let b;

// console.log(typeof num1)
// console.log(b)

//type conversion**********************************

// let a = "4" + 9
// let a = 3 + "hello"
// let a = 3 + true
// let a = 3 + null
// let a = 3 + undefined

// let a = 3 - "hello"
// let a = "5" - 3
// let a = 3 - true
// let a = 3 -null
// let a = 3 - undefined

// let a = null
// let b = undefined
// let c = true

// let result = Number(a)
// let result = String (a)
// let result = parseInt(20)
// let result = parseFloat(20.888)

// console.log(result)
// console.log(typeof result)


//Operators**********************************

//Arithmatic Operators-------------
// let a = 7, b = 8;

// //addition
// let add = a + b

// //subtraction
// let sub = a - b

// //multiplaction
// let multi = a * b

// //division
// let div = a / b

// //modules
// let mod = a % b

// //square
// let sqr = a ** b

// console.log(add)


//increment and decrement operators-----------

// let a = 3
// console.log(++a)//pre increment
// console.log(a++)//post increment
// console.log(--a)//pre decrement
// console.log(a--)//post decrement

//comparison operators---------------

// let a=7, b=5

// console.log(a<=b)//Less than or equal to
// console.log(a<=b)//Less than or equal to
// console.log(a>=b)//Greater than or equal to
// console.log(a>=b)//Greater than or equal to
// console.log(a==b)//equal to
// console.log(a!=b)//not equal to

// let a = 5, b = "5"
// console.log(a == b)//equal to

// console.log(a === b)//strict equality operator
// console.log(a !== b)//strict inequality operator


//Logical operators---------------------

// console.log(2>4 || 4>9) //Logical OR ||
// console.log(2>4 && 4>9) //Logical AND &&
// console.log(!(2>4)) //Logical NOR !


//Conditional Operators---------------------
// let a = 9, b = 7

// //if conditional-
// if (a>b){
//     console.log("A is Greater.")//statements
// }

//if-else conditional-
// if (a > b) {
//     console.log("A is Greater.")
// }
// else {
//     console.log("B is Greater.")
// }

//else if conditional-
// let a = 9, b = 8

// if (a > b) {
//     console.log("A is Greater.")
// }else if (a == b) {
//     console.log("Both are equal.");
// } else {
//     console.log("B is Greater.")
// }

//Nested if conditional- useing than, when have double condition
// let age = 29
// let name = "jhon"

// if (age >= 21) {
//     if (name == "alise") {
//         console.log("You are my employee");
//     } else {
//         console.log("name is not matched.")
//     }
// } else {
//     console.log("You are not ny employee.")
// }


//Switch Case**********************************

// let choose = 5
// switch (choose) {
//     case 1:
//         console.log("I'm One.");
//         break;

//     case 2:
//         console.log("I'm Two.");
//         break;


//     case 3:
//         console.log("I'm Three.");
//         break;

//     case 4:
//         console.log("I'm Four.");
//         break;


//     case 5:
//         console.log("I'm Five.");
//         break;

//     default:
//     console.log("Incorrect Choice!");

// }


//Loop**********************************

//for loop--
// for (i=1; i<=10; i++){
//     // console.log("2 X " + i + " = " + 2*i)
//     console.log(`2 X ${i} = ${2*i}`) //(``)->back ticks

// }

//while loop----even numbers
// let i = 1
// while (i < 15) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
//     i++
// }

//do-while loop--
// let i = 1
// do{
//     console.log(i)
//     i++
// }while(i<10)


//functions()**********************************

// func-1--- explicit return in js functions
//IIFE (Immediately Invoked Function Expression). IIFE is a function that is called immediately as soon as it is defined.
//  (function(){
//     console.log("hello javascript1")
//  }());
//  //-------------------------------------
//  (function(){
//     console.log("hello javascript2")
//  })();
//  //-------------------------------------
//  (function hello(){
//     console.log("hello javascript3")
//  })();
//  //-------------------------------------
//  (()=>{
//     console.log("hello javascript4")
//  })();

// func-2---
//  let add = function(a,b){
//     return a+b
//  }
//  result = add(5,6)
//  console.log("Addition is : " + result)

// func-3---
//  function main(a){
//     console.log("hello " + a)
//  }
//  main("programmer");

// func-4---
// let x = (a,b) => console.log(a+b);//implicit return in js functions
// x(4,6);

//also use like this-------------------------------
// let x = (a,b) => (console.log(a+b));
// x(4,6);

// func-5---
// let add = (a,b) => {return a+b}; //explicit return in js functions

// let result = add(4,6);
// console.log("Addition is : ", result)

// func-6---
// let a=8 //globle variable

// function add(){
//     let b=9 //local variable
//     console.log("addition of globle and local variable 'a' and 'b' is  : ", a + b)
// }
// add();

// console.log("globle variable is : ", a)//we not use 'b' because b is defind in locally, it is called local variable


// array**********************************

// let  arr = ["mintu", "chintu", "mukun", 4, 9.3, null, true, undefined ]

// console.log(arr)
// console.log(arr[2])
// console.log(arr.length)

// arr.push("rahul")// push in last index position of array
// console.log(arr)

// arr.unshift("rahul")// push in first index position of array
// console.log(arr)

// arr.splice(4,0, "nidhi")//if you remover any index and push in any index position of array
// ----------------------------------
// arr[4] = "nidhi" //add this value in index 3

// console.log(arr)


// let a = arr.slice(3,5)// cut two sides rest between value
// console.log(a)


// let num = [23, 19, 18, 45, 12, 10]

// for(i=0; i<num.length; i++){
//     console.log(num[i])
// }

//similar to as above---
// num.forEach((value, index, array) => {
//     console.log("value\tindex\tarray \n" + value + "\t" + index + "\t" + array)
// });


//map---A map create a new array
// let newArr = num.map((value, index, array) => {
//     // console.log(value+5)

//     return value+5
// });
// console.log("array : "+num)
// console.log("new array : "+newArr)


//indexOf----find index velue of number in given array
// console.log("array : "+num)
// console.log(num.indexOf(12))


//reverse----
// console.log("array : " + num)
// console.log("array reverse : " + num.reverse())

//sort----
// console.log("array : " + num)
// console.log("array sort : " + num.sort())

//tostring----
// console.log(num.toString())
// console.log(typeof num.toString())

//filter----
// num.filter((value, index, array)=>{
// if (value%2 == 0){
//     console.log(value)
// }
// })

//find----
// let a = num.find((value, index, array)=>{
//    return value==12
// })
// console.log(a)

//findIndex----
// let a = num.findIndex((value, index, array)=>{
//     return value==12
//  })
//  console.log(a)

//findLastIndex----
// let a = num.findLastIndex((value, index, array)=>{
//     return value==12
//  })
//  console.log(a)

//concat---mearge two or more array in one array
// let num1 = [12,15,18,10,17]
// let num2 = [13,14,16,19,11]
// console.log(num1.concat(num2))

// console.log(num1.concat(19))

//split and join----
// let num = '20,30,40'
// let arr = num.split(',');

// arr.forEach(values =>{
//     console.log(values)
// })

// let jo = arr.join(" and ")
// console.log(jo)


//******************************************************* DAY-2 **********************************************************


// for in/for of***************************************

// let arr1 = [10,20,30,40,50]
// for (let value in arr1){
//     console.log(arr1[value])
// }

// for of----
// let arr = [10,20,30,40,50]
// for (let value of arr){
//     console.log(value)
// }

//multidimensional array*****************************************

// let arr = [
//     [10,20,30],
//     [40,50,60],
//     [70,80,90]
// ]

//print complete array or elements----------------
// console.log(arr)//array
// console.log(arr[1]);//2nd row
// console.log(arr[0][2]);// value of 1st row and 3rd col


// for(i=0; i<arr.length; i++){
//    console.log(arr[i]);
// }

// for(i=0; i<arr.length; i++){
//     for (j=0; j<arr[i].length; j++){
//         console.log(arr[i][j]);
//     }
// }
//--------------------------
// arr.forEach((val)=>{
//     console.log(val)
// })

// arr.forEach((elements)=>{
//     elements.forEach((val)=>{
//         console.log(val)
//     })
// })
//--------------------------
// for (let val in arr){
//     console.log(arr[val])
// }

// for (let val of arr){
//     for (let r of val){
//         console.log(r)
//     }
// }

//Example-1 : addition of two matrix-----
// let arr1 = [[10, 20, 30],
// [40, 50, 60],
// [70, 80, 90],]

// let arr2 = [[11, 22, 33],
// [44, 55, 66],
// [77, 88, 99]]

// console.log("\nMatrix A : \n" + arr1[0] + "\n" + arr1[1] + "\n" + arr1[2])
// console.log("\nMatrix B : \n" + arr2[0] + "\n" + arr2[1] + "\n" + arr2[2])
// console.log("\nAddition of two matrix is :")
// for(i=0; i<arr1.length; i++){
//     for(j=0; j<arr2.length; j++){
//     console.log(arr1[i][j] + arr2[i][j])
//     }
//     console.log("\n")
// }


//Example-2 : addition of two array------
// let arr1 = [10, 20, 30]
// let arr2 = [11, 22, 33]

// arr1.forEach((val1) => {
//     arr2.forEach((val2) => {
//         console.log(val1 + val2)
//     })
// })


// Copy and Spread*****************************************************

// let arr1 = [10,20,30,40,50]

// let arr2 = arr1; //arr1 copy in arr2

// let arr2 = arr1.slice(0).concat(60); //arr1 copy but push only arr2

// let arr2 = [...arr1];//arr1 copy and push only in arr2

// arr2.push('rahul')

// console.log(arr1);
// console.log(arr2);

//Spread operator--------------------------------
// let arr1 = [10,20,30]// this value convert in object key value

// let arr3 = {...arr1}
// console.log(arr3);

//Examplee-1-----------------------
// function sum(a,b,c){
//     return a+b+c;
// }
// console.log("addition is : " + sum(...arr1))

//Examplee-2-----------------------
// let obj = {
//     name : 'synoize',
//     college : 'abc college',
//     fee : 88000
// }

// console.log({...obj, name: 'tinku'})

//Destructuring-----------------------------------------

// let arr = [8, 9, 6]

//if we need--
// let a= arr[0]
// let b= arr[1]

//now we use this--
// let [a,b,c] = arr

// console.log(a,b,c)

// Example-1 ------------------------------
// let arr = [11,22,33,44,55,66,77]
// let [a,b, , ,e, ...rest] = arr //totaly your choice that which value you want to use 
// console.log(a,b,e, rest)

//Example-2 ------------------------------
// let {a,b,c,d} = {a:1, b:4, d:7}
// console.log(a,d);

//Example-3--------------------------------
// const obj = {a:3,b:5}
// //------------------------
// const {a,b} = obj
// console.log(a,b)
// //--------------------
// console.log(obj.a, obj.b);


//Objects*************************************************************

// let obj = {
//     name : 'Alice',
//     "full name" :"Alice kio",
//     mobile : 1234567890,
//     hobbies : ['reading', 'coding', 'gaming'],
//     func : function(){
//         console.log('I m FUNCTION');

//     },
//     obj: obj2 = {
//         key: 7,
//         value : 7
//     }

// }

// console.log(obj.name) //for print obj of any specific key-value

// console.log(obj["full name" ]) //for print obj's dobble code of key-value 

// obj.func();//for print obj's function of key-value

// console.log(obj.hobbies); //for print obj's array of key-value

// console.log(obj.obj); //for print obj of key-value


// obj.key1 = "value1"// add new key-value in obj

// let a = "key2"
// obj[a] = "value2"// add new key-value in obj

// console.log(obj) //for print obj of all key-value-----------------

//for in --------------------------
// for(i in obj){
//     console.log(i); //for print obj of all key only
// }

// for(i in obj){
//     console.log(obj[i]); //for print obj of all values only
// }

// for(i in obj){
//     console.log(i ,": ",obj[i]); //for print obj of all key-values both
// }

//using for of----------------------------------
// for(let i of Object.keys(obj)){
//     console.log(i); //for print obj of all key only
// }

// for(let i of Object.keys(obj)){
//     console.log(obj[i]); //for print obj of all values only
// }

// for(let i of Object.keys(obj)){
//     console.log(i , " : ", obj[i]); //for print obj of all key-values both
// }


//Object inside Array***********************************************

// let arr = [
//     {name : 'rahul' , mark : 40},
//     {name : 'kunal' , mark : 48},
//     {name : 'mohit' , mark : 39}
// ]

// console.log(arr[1])

// for (let i of arr){
//     console.log(i.name);
// }


//function inside function********************************

// function func1(){
//     console.log("I m FUNCTION 1");
//     function func2(){
//         console.log("I m FUNCTION  2");
//     }
//     func2();
// }

// func1();


//Lexical Scope*********************************************

// function func1(){
//     var a = 1;
//     console.log("This is function " + a);// function find variable in Lexical Scope
//     function func2(){
//         var a = 2
//         console.log("This is function " + a);// function find variable in Lexical Scope
//     }
//     func2()
// }
// func1()


//Debugger**********************************************************************

//debugging this function means we understand that how to work this code
// function func(){
//     debugger;
//     for (let i = 1; i<=4; i++){
//         console.log(i);
//      }
// }
// func()


//Set*************************************************

// const arr = [10,20,30,40,50]// it's array
// arr.push(73)
// console.log(arr);
// console.log(arr.length);

//-----------------------

// const set = new Set([10,20,30,40,50]); //collection of only unique values in --> Set 
// set.add("new val");//add only unique value
// set.add(30);//Dont add duplicate value
// console.log(set);

// //find the total length of Set-----
// let length = 0
// for (let val of set){
//     length++
// }
// console.log(length)


//Map*********************************************************

// it's a group of array----
// let map1 = new Map([
//     ["name", "rajak"],
//     ["value", [22, 33, 44, 55]],
//     [1, "one"]
// ])

// console.log(map1.get(1));//get any key value 

// map1.set("address", "tokio");// set any key-value in map as array

// let k = map1.keys()//find all keys of in map
// for (let key of k){
//     console.log(key);
// }

// console.log(map1);


//******************************************************* DAY-3 **********************************************************

//this******************************************************

//“This” keyword refers to an object that is executing the current piece of code. It references the object that is executing the current function. If the function being referenced is a regular function, “this” references the global object.

// let obj = {
//    firstName : "Jone",
//    lastName : "leo",

//    func : function fullName(){
//     console.log(this.firstName + " " + this.lastName + ", Welcome to Website!");
//     console.log(this);//now current contex in obj
//    }
// }

// obj.func();

// obj.firstName = "Alice";//change contex
// obj.func();

// console.log(this);//now current contax is empty because now globle have nothing any contax

//for interview ?------------------> globle obj in browser have 'window'

// what we use 'this' in functions?--------------------
// const func = function f1() {
//     name: "alice"
//     console.log(this);
//     console.log(this.name);
// }
// func()

//in arrow function---------globle object empty
// const func = () => console.log(this);
// func()


//new********************************************************************************************
//Basically 'new' keyword is use to create object by using constructor function

// function User(name , age){
//     this.name = name 
//     this.age = age
// }
// const userName = new User("jone", 24)
// const userName2 = new User("Alice", 23)
// console.log(userName.name + " and " + userName2.name);

//without using 'new' keyword-----------------

// function User(name){
//     if(!new .target){
//         return new User(name)
//     }
//     this.name = name
// }
// const userName = User("koi")
// console.log(userName.name);


//Symbol**************************************************************************************
//It's always unique

// let sym = Symbol("synoize")
// let sym2 = Symbol("synoize")

// console.log(sym);
// console.log(sym.toString);
// console.log(sym.description)
// console.log(sym === sym2);//always Symbol's are unique

//Example-1--------------------------------------
// let id = Symbol("id");
// let obj ={
//     name : "Alice",
//     [id]:1
// }

// console.log(obj);
// console.log(obj[id]);

//Example-2--------------------------------------
// let id = Symbol("id");
// let obj ={
//     name : "Leo",
// }
// obj[id] =2
// obj.age =23

// console.log(obj);

// // if we want to print key's of Obj --- symbol have hidden property it's do call seprately
// for(let key in obj){
//     console.log(key);
// }


//Recursion ************************************************************************************
//function calling itself, it's called Recursion

// function num(n){
//     if(n<=10){
//         console.log(n);
//         num(n+1)  // function calling itself-->Recursion
//     }
// }
// num(0)

// example : factorial using Recursion---------------------------------

// function factorial(n){
//     if(n==1){
//         return 1;
//     }
//     else{
//         return n*factorial(n-1)
//     }
// }
// console.log(factorial(5));


// synchronous and Asynchronous**************************

//synchronous--> read line by line 
// let str1 = "Hello"
// let str2 = "I'm"
// let str3 = "Synchronous"

// console.log(str1, str2, str3)

//Asynchronous--> don't read line by line 
// setTimeout(() => {
//     console.log("hello");
// }, 3000);

// setTimeout(() => {
//     console.log("I'm");
// }, 1000);

// setTimeout(() => {
//     console.log("Asynchronous");
// }, 1000);

//----------------------------
// function hello(){
//     console.log("hello");
// }
// setTimeout(hello, 8000);


//callback*******************************************************************
//A callback is a function passed as an argument to another function.

// const loop = function(callback){
//     for(let i=1; i<50; i++){
//         if(i%2===0){
//             console.log(i);
//         }
//     }
//     callback()
// }

// loop(()=>{
//     console.log("even numbers");
// })

// first method-------------------------------------
// const add = (a,b, sum)=> {
//     var result = a+b;
//     console.log("result : " + result);
//     sum()
// }

// add(3,5, ()=>console.log("addition completed."));

// second method-------------------------------------
// const add = function(a, b, sum){
//     var result = a+b;
//     console.log("result : " + result);
//     sum();
// }

// add(3,4,function(){
//     console.log("addintion is complete");
// })

//third method-----------------------------------------
// function callback(){
//     console.log("adding complete.");
// }

// const add = function (a,b, callback){
//     result=a+b;
//     console.log("Result : "+result);
//     callback();
// }

// add(8,9, callback)

//Example-1:-----------------------------------
// const hello = () =>{
//     console.log("I'm callback function with Asynchronous");
// }

// setTimeout(hello, 1000);

//Example-2:-----------------------------------

// function sumCallback(a,b){
//     var result = a+b
//     console.log("result is : " + result);
// }
// const calculator = (a,b, sumCallback) =>{
//     sumCallback(a,b)
// }
// calculator(3,5, sumCallback)

//----------------------------------------same but diff.. method
// const calculator = (a,b, sumCallback) =>{
//     sumCallback(a,b)
// }
// calculator(3,5, (a,b)=>{
//     var result = a+b
//     console.log("result is : " + result);
// })


// callback hell***************************************************
//Nested callbacks stacked below one another forming a pyramid structure (pyramid of Doom)

//step-1--------------------function
// function order(){
//     console.log("product order")
// }

// function shipping(){
//     console.log("product shipping")
// }

// function arrive(){
//     console.log("product arrive")
// }

// function delevry(){
//     console.log("product delevry")
// }

// order();
// shipping();
// arrive();
// delevry();

//step-2------------------settimeout
// function order(){
//     setTimeout(() => {
//         console.log("product order")
//     }, 2000);//2s==2000ms

// }

// function shipping(){
//     console.log("product shipping")
// }

// function arrive(){
//     console.log("product arrive")
// }

// function delevry(){
//     console.log("product delevry")
// }

// order();
// shipping();
// arrive();
// delevry();

//step-3------------------callback in single function
// function order(callback){
//     setTimeout(() => {
//         console.log("1) product order")
//         callback()
//     }, 2000);//2s==2000ms

// }

// function shipping(){
//     console.log("2) product shipping")
// }

// function arrive(){
//     console.log("3) product arrive")
// }

// function delevry(){
//     console.log("4) product delevry")
// }

// order(()=>{
//     shipping();
//     arrive();
//     delevry();
// });

//step-4------------------callback in compleete function
// function order(callback) {
//     setTimeout(() => {
//         console.log("1) product order")
//         callback()
//     }, 2000);//2s==2000ms

// }

// function shipping(callback) {
//     setTimeout(() => {
//         console.log("2) product shipping")
//         callback()
//     }, 2000);

// }

// function arrive(callback) {
//     setTimeout(() => {
//         console.log("3) product arrive")
//         callback()
//     }, 2000);
// }

// function delevry() {
//     setTimeout(() => {
//         console.log("4) product delevered");
//     }, 2000);
// }

// //callback hell or pyramid of Doom--->problem to understand 
// order(() => {
//     console.log("loading...");
//     shipping(() => {
//         console.log("loading...");
//         arrive(() => {
//             console.log("loading...");
//             delevry();

//         });
//     });
// }); 

//Example -------------------------
// function getData(dataId, getNextData){
//     setTimeout(() => {
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000);
// }

// //callback hell---
// getData(1, ()=>{
//     console.log("getting next data...");
//     getData(2,()=>{
//         console.log("getting next data...");
//         getData(3, ()=>{
//             console.log("all data finded.");

//         })
//     })
// })


//promise*************************************************************
//It is for 'eventual' completion of task. it is an object in JS.It is a solution to callback hell. In the promise 'resolve' and 'reject' are callback provided by JS. 

// let promise = new Promise((resolve, reject)=>{
//     console.log("On working...");
//     resolve("work done");
// })


// Example-------------------------------
// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data ", dataId)
//             // resolve("success")
//             reject("failed")
//         }, 3000);
//     })
// }


// let promise = getData(46726)
// console.log(promise)

//--------------------------------------------
// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("I am Promise.");
//             // resolve("success")
//             reject("failed")
//         }, 3000);
//     })
// }

// let promise = getPromise();

// //after resolve promise
// promise.then((res)=>{
//     console.log("promise", res);
// })
// //after reject promise
// promise.catch((err)=>{
//     console.log("promise", err);
// })


//promise chain****************************************************

// let asyncFunc = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data")
//             resolve("success")
//         }, 2000);
//     })
// }

// console.log("fetching data...");
// let p1 = asyncFunc();
// p1.then((res) => {
//     console.log(res);

//     console.log("fetching data...");
//     let p1 = asyncFunc();
//     p1.then((res) => {
//         console.log(res);
//     })
// })

//------------------------------------------------
// let asyncFunc1 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1")
//             resolve("success")
//         }, 2000);
//     })
// }

// let asyncFunc2 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2")
//             resolve("success")
//         }, 2000);
//     })
// }

//----------------------------------method
// console.log("fetching data1...");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log(res);

//     console.log("fetching data2...");
//     let p2 = asyncFunc2();
//     p2.then((res) => {
//         console.log(res);

//         console.log("again fetching data1...");
//         let p1 = asyncFunc1();
//         p1.then((res) => {
//             console.log(res);
//         })
//     })
// })

//----------------------------------method
// console.log("fetching data1...");
// asyncFunc1().then((res) => {
//     console.log(res);

//     console.log("fetching data2...");
//     asyncFunc2().then((res) => {
//         console.log(res);

//         console.log("again fetching data1...");
//         asyncFunc1().then((res) => {
//             console.log(res);

//         })
//     })
// })


// Example-------------------------------------------------
// const getData = (dataId) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success")
//         }, 2000);
//     })
// }

//promise chain--------------------------------method
// getData(1).then((res) => {
//     console.log("next data...");
//     getData(2).then((res) => {
//         console.log("next data...");
//         getData(3).then((res) => {
//             console.log("next data...", res);
//         })
//     })
// })

//promise chain--------------------------------method*
// getData(1).then((res) => {
//     console.log("next data fetching...");
//     return getData(2);
// }).then((res) => {
//     console.log("next data fetching...");
//     return getData(3);
// }).then((res) => {
//     console.log(res);
// })


//Async-Await*********************************************************************
//Basicly it's work an Asynchronous programming make eazy.
//'async' function always returns a promise and 'await' pauses the execution of it's surrounding async function until the promise is settled.

// async function hello(){
//         console.log("hello");
// }
// hello()

// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data");
//             resolve(200)
//         }, 2000);
//     })
// }

// async function apiCall() {
//     await api()
// }

// console.log(apiCall());

//Example--------------------------------------------

// const getData = (dataId) =>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve(200)

//         }, 2000);
//     })
// }

// async function getNextData(){
// await getData(1)
// console.log("next data..");
// await getData(2)
// console.log("next data..");
// await getData(3)
// console.log("success");
// }
// console.log(getNextData());

//IIFE (Immediately Invoked Function Expression). IIFE is a function that is called immediately as soon as it is defined.----------------------method
// (async ()=>{
//     await getData(1)
//     console.log("next data..");
//     await getData(2)
//     console.log("next data..");
//     await getData(3)
//     console.log("success");
// })();


// setInterval and clearInterval****************************************************

//  let interval = setInterval(fun, 1000)

// let num=0;

// function fun(){
//     // num = num+1
//     // console.log(num);

//     let data = new Date().toLocaleTimeString()
//     console.log("new time ",data);
// }

//for clear this interval
// setInterval(() => {
//     clearInterval(interval)
// }, 5000);


//Call, Bind, Apply****************************************************************

// let obj1= {
//     fName : "Alice",
//     fun : function(){
//         console.log(this.fName);
//     }
// }

// let obj2={
//     fName: "Kenny"
// }

// obj1.fun()
// obj1.fun.call(obj2)

//--------------------------------------method
// function fun(age, gender){
//     console.log(obj1.fName,age,gender);
// }

// let obj1= {
//     fName : "Alice",
// }
// let obj2={
//     fName: "Kenny"
// }

//Call-----------------
// fun.call(obj1, 23, 'female')
// fun.call(obj2, 28, 'male')

//Apply-----------------
// fun.apply(obj1, [ 23, 'female']);
// fun.apply(obj2, [28, 'male'])

//Bind-----------------It's make a function
// var a = fun.bind(obj1, [ 23, 'female']);
// console.log(a);


//******************************************************* DAY-4(OOP's)*********************************************************

//Property Flags and Descriptor*****************************************************

// let emp = {}
// emp.name = "alice"
// emp.gender= "female"

// console.log(Object.getOwnPropertyDescriptor(emp, "name"));

// //defind property of descriptor
// Object.defineProperty(emp, "age",{
//     value:21,
//     writable: true,
//     configurable: true,
//     enumerable: true
// })
// console.log(emp);

// //if 'writable' is 'false'
// emp.age=23
// console.log(Object.getOwnPropertyDescriptor(emp, "age"));

// // if 'configurable' is 'false'
// delete emp.age

// //if 'enumerable' is 'false'---loop or array not show
// for (let k in emp){
//     console.log(k);
// }

// console.log(emp);

//__proto__******************************************************
//-->we can set prototype using this

// let obj = {
//     fName: "jone",
// }
// let obj2 = {
//     lName: "kevin",
// }

//--------------------------
// obj2.__proto__= obj;
// console.log(obj2.fName);

//-----------------------------
// newObj = Object.create(obj)
// newObj.nName = "Smith"
// console.log(newObj.fName);


// Example----------------------------------------------

// let user = {
//     getFullName: function(){
//         return this.fName + " " + this.lName;
//     },
//     getAge: function (){
//         let age = new Date().getFullYear() - this.birth;
//         return age
//     }
// }
// let student ={
//     fName :"Glaxy",
//     lName: "Leo",
//     birth:2009,
//     // getFullName: user.getFullName //-----------------loading all, without needed
// }
// let teacher ={
//     fName :"Lemeo",
//     lName: "None",
//     birth:1989,
//     // getFullName: user.getFullName //-----------------loading all, without needed
// }

// // prototype Inheritance----loading then, when we needed
// student.__proto__ = user
// teacher.__proto__ = user

// console.log(student.getFullName());
// console.log(teacher.getFullName());


//prototype*******************************************************
//-->prototype are the machanism by which js object inherit features from one another
//-->*If object and prototype have same method, object's method will be used

// Object.prototype.myAppData = "Hello, Welcome to my App!"

// Object.prototype.myApp = function(){
//     return "Successfully logined your account!"
// }
// Object.prototype.myAppFeatures = {
//     appName:"NOTRIX",
//     login:true,
//     product:4
// }

// let app = {};//use for Object---

// console.log(app.myAppData);
// console.log(app.myApp());
// console.log(app.myAppFeatures.appName);
// console.log(app.myAppFeatures.appName.length);

// String.prototype.myAppUse = "Explore My App";   //use for string---
// console.log("app".myAppUse);

// // Example------------------appName length +1
// String.prototype.customLength = function(){
//     return this.length+1
// }
// console.log(myAppFeatures.appName.customLength());


// // Example-2:-----------------------------
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.greeting = function () {
//     console.log(`hii ${this.name}`);
// }

// let user = new Person("Jone", 28)
// user.greeting();
// console.log(user);


//Class*****************************************************************************
//-->class is program-code template for creating objects
//-->Those objects will have some state (variables) & some behaviour(function) inside it
//-->when we create an object and we not create constructor in class then javascript automatically invoked by new

// class User {
//     constructor(name){
//         console.log("greeting");
//         this.name = name;
//     }

// //method-----------
//     sayHii(){
//         console.log(`Hii, ${this.name}`);
//     }
// }

// // -->create new objects through classes
// let user1 = new User("jone")
// user1.sayHii()
// let user2 = new User("kong")
// user2.sayHii()

// console.log(user1, user2)


//Inheritance***************************************************
//-->It's passing down properties and methods from parent class to child class(drived class)
//-->*If Child and Parent have same method, child's method will be used.[Method Overriding]

// class Person{
//     constructor(){
//         this.species = "homosapiens"
//     }
//     eat(){
//         console.log("eat");
//     }
//     sleep(){
//         console.log("sleep");
//     }
//     work(){
//         console.log("do nothing");
//     }
// }

// class farmer extends Person{
//     work(){
//         console.log("provide food's for everyone");
//     }
// }

// class unemploy extends Person{}

// let person = new Person()
// console.log(person);

// let ramu = new farmer()
// console.log(ramu);

// let suresh = new unemploy()
// console.log(suresh);


//'super' Keyword***********************************************
//-->The 'super' keyword is used to call the constructor of its parent class to access the parent's properties and methods

// class Person {
//     constructor(name, skill) {
//         this.species = "homosapiens"
//         this.name = name;
//         this.skill = skill;
//     }

//     sleep() {
//         console.log("sleep");
//     }

//     work() {
//         console.log("do nothing");
//     }
// }

// class Unemployee extends Person {
//     constructor(name, skill, money) {
//         super(name, skill);//to invoke parent class constructor properties and methods
//         this.money = money;
//     }
// }

// class Engineer extends Person {
//     constructor(name, skill, money) {
//         super(name, skill);//to invoke parent class constructor properties and methods
//         this.money = money
//     }

//     work() {
//         super.sleep(); //if we want to firstly print 'sleep()' then next'work()' then we use this
//         console.log("Solve the Problem");
//     }
// }

// let unEmployee1 = new Unemployee("kong leo", "no skill", "no money")
// console.log(unEmployee1);

// let unEmployee2 = new Unemployee("ruff josn", "no skill", "no money")
// console.log(unEmployee2);

// let engineer = new Engineer("Alice keon", "Web devloper", 50000)
// console.log(engineer.work())


//Static***************************************************************************
//-->Static methods are often utility functions, it's properties cannot be directly accessed on instances of the class. Instead, they're accessed on the class itself.


// class Static {
//     constructor() {
//         console.log(Static.staticProperty);
//         console.log(this.constructor.staticMethod());
//     }

//     static staticProperty = 'someValue';

//     static staticMethod() {
//         console.log('static method has been called.');
//     }
//     static {
//         console.log('Class static initialization block called');
//     }
// }

// let s = new Static();// create object then constructor called
// Static.staticMethod();

// //Example-1:---------------------------------
// class Animal {
//     constructor(name){
//         this.name = name;
//     }

//     eat(){
//         console.log(`${this.name} is eating food.`);
//     }

//     static speak(name){
//         console.log(`${name} make a noise.`);
//     }

// }

//--------------------------
// let a1 = new Animal("Donkey");//static function is not work for this object
// console.log(a1.eat());

// Animal.speak(a1.name);//static function call and use 'a1' object in parameter
//------------------------method - call for static
// a1 = "Monkey"
// Animal.speak(a1);

// //Example-2:---------------------------------
// class Game {
//     static score = 0;
//     constructor() {
//         this.isPlaying = false;
//         console.log("--Play Game--");
//     }
//     start() {
//         this.isPlaying = true;
//         console.log("Game Start");
//     }
//     over() {
//         this.isPlaying = false;
//         console.log("Game Over");
//         Game.gameScore();
//     }
//     static gameScore() {
//         Game.score++
//         console.log(`Score ${Game.score}`);
//     }
// }

// let game = new Game()

// game.start();
// game.over();

// game.start();
// game.over();

// game.start();
// game.over();


//Public and Private****************************************

// class Family {
//     #name = "Mohit"
//     constructor() {
//         console.log(`${this.#name} Family Calling...`);
//         this.#friend();
//     }
//     mumma() {
//         console.log(`Hey, ${this.#name} I'm your mumma.`);
//     }
//     papa() {
//         console.log(`Hey, ${this.#name} I'm your papa.`);
//     }
//     sis() {
//         console.log(`Hey, ${this.#name} I'm your sister.`);
//     }
//     bro() {
//         console.log(`Hey, ${this.#name} I'm your brother.`);
//     }
//     #friend() {
//         console.warn(`${this.#name} you can't attent your friend call.`);
//     }
// }

// let family = new Family()

// family.mumma();

// Family.#friend();// it's not accessible outside class because it has a private

// //Example of public-----------------------
// //Public--------------
// class BankAccount{
//     balance = 0;

//     deposit(amount){
//         this.balance += amount;
//         console.log(`Deposit is ${amount} and new Balance is ${this.balance}`);
//     }
//     withdraw(amount){
//         if(amount>this.balance){
//             console.log("Insuficient Fund ");
//         }
//         else{
//             this.balance-= amount
//             console.log(`withdraw ${amount}, new Balance is ${this.balance}`);
//         }
//     }
//     checkBalance(){
//                 console.log(`Current Balance is ${this.balance}`);
//             }
// }

// const account = new BankAccount()

// account.deposit(1000);
// account.withdraw(30)
// account.checkBalance()

// account.balance+=100;
// account.checkBalance()

// //Example of private---------------------------
// //Private(#)----------------------
// class BankAccount{
//     #balance = 0

//     deposit(amount){
//         this.#balance += amount
//         console.log(`deposit amount is ${amount} and New #Balance is ${this.#balance}`);
//     }

//     withdraw(amount){
//         if(amount>this.#balance){
//             console.log("Insuficient Fund");
//         }
//         else{
//             this.#balance-=amount;
//             console.log(`Withdraw amount is ${amount} and new #Balance is ${this.#balance}`);
//         }
//     }

//     checkBalance(){
//         console.log(`Current Balance is ${this.#balance}`);
//     }
// }

// const account = new BankAccount();

// account.deposit(1000);
// account.withdraw(30)
// account.checkBalance()

// account.#balance+=1000
// console.log(account.#balance);


//try, catch and throw(Error Handling)******************************************************

// function fun(a,b){
//     try{
//         if (b==0){
//             throw new Error("Can't divide by 0")
//         }
//         else{
//             console.log(a/b);
//             // console.log(a/b+x);//for check 'catch'---
//         }
//     }catch(err){
//         console.log(err.message);//if 'try' failed then run this error as message
//     }
//-->for this function always execute -> if we use 'return true' in 'try' then only console.log() not print but 'finally' print
//     finally{
//         console.log("calculate next");
//     }
// }

// fun(10,2);


//fetch API (Application Programming Interface)**********************************************
//-->The featch api provide an interface for featching (sending/receiving) resources. It's a Asynchronouns method and always return promise
//List of APIs here-->https://free-apis.github.io/

const URL = "https://cat-fact.herokuapp.com/facts";//get request from this

// const getFact = async () =>{
//     let response = await fetch( URL);
//     console.log(response);//JSON format

//     let fact = await response.json();
//     console.log(fact[0].text);//JS object
// }

// console.log(getFact())

//get Network Request--------------data format
//-->AJAX is Asynchronouns JS & XML--
//--->JSON is JavaScript Object Notation (AJAJ)

//-->json() method : return a second promise that resolve with the result of parsing the response body text as JSON (input is JSON , output is JS object)

//Example------------------------------with internet connection
const factPara = document.querySelector("#fact")
const btn1 = document.querySelector("#btn")

const getFacts = async () => {
    console.log("getting data...");
    let response = await fetch(URL);
    console.log(response);//JSON format

    let fact = await response.json();
    factPara.innerText = fact[0].text
}

btn1.addEventListener("click", getFacts)

// Same this work using 'Promise' -------------------------------------

// const factPara = document.querySelector("#fact")
// const btn1 = document.querySelector("#btn")

// function getFacts() {
//     fetch(URL)
//     .then((response) => {
//         console.log(response);
//         return response.json();
//     })
//     .then((fact)=>{
//         console.log(fact);
//         factPara.innerText = fact[0].text;
//     })
// }
// btn1.addEventListener("click", getFacts)

//Learn Requests & Response-----------------------------------
//-->HTTP Verbs -- https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
//-->Response Status Code -- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

// -->*HTTP response 'headers' also contain details about the response, such as content type, HTTP status code


// *********************************************************************** DAY-5 *****************************************************************

// Window Object*************************************************
// --> The window object represents an open window in a browser. It is browser's object (not JavaScript's) & is automatically created by browser
//--> It is a 'globle' object with lots of properties & methods


//DOM (Document Object Model) --> When a web page is loded, the browser creates a DOM of the page

// console.dir(window.document.body)

//window (node)-->document (node)-->html (node)-->1)head (node)-->meta, title, link etc... and 2)body (node)-->i)div--->img, h1, p, div etc... and ii)script

// DOM Manipulation************************************************

// //selecting with id------------------------
// let id = document.getElementById("writer1")
// id.innerHTML="Harivansh Roy Bachhan"
// id.style="background:red"
// console.dir(id)


// //*selecting with class------------------------
// let class2 = document.getElementsByClassName("writer2");
// class2.innerHTML="Jems Gothlin"
// class2.style="background:red"
// console.dir(class2)

// //*selecting with tag------------------------
// let tag = document.getElementsByTagName("li");
// tag.style="background:red"
// console.dir(tag)

// //querySelector with Id, className, Tag----------------------
// let firstEl = document.querySelector("li")
// firstEl.innerText="Sailesh Traphati"
// firstEl.style="background:red"
// console.dir(firstEl)

// //*querySelectorAll with Id, className, Tag----------------------
// let allEl = document.querySelectorAll("li")
// allEl.style="background:red"
// console.dir(allEl)

// Properties-----------------------------------
// let a = document.querySelector("ul")

// //-->tagName: return tag for element nodes
// console.dir(a.tagName)

// //-->innerText: return the text content of the element and all its children
// console.dir(a.innerText)
// //Example---------------------
// a.innerText= "premchand"//view in 'Elements' of console wimdow

// //-->innerHTML: return the plain text or HTML content in the element 
// console.dir(a.innerHTML)
// //Example---------------------
// a.innerHTML= "<p>premchand</p>"//view in 'Elements' of console wimdow

// //-->innerContent: return textual content even for hidden elements 
// console.dir(a.innerContent)
// //Example---------------------
// a.style="visibility:hidden"
// console.dir(a.textContent)//we use 'textContent' then only view contents


//Practice Questions---------------------------------------------
// Q1:-
let h = document.querySelector("h2")
h.innerText = `${h.innerText} Learn with Synoize Code`//concatenate

// Q2:-
let divs = document.querySelectorAll(".box")

//method-------------
let val = 1;
for (let div of divs) {
    div.innerText = `New Unique value ${val}`;
    val++;
}

//method-------------
// divs[0].innerText = `New Unique value 1`;
// divs[1].innerText = `New Unique value 2`;
// divs[2].innerText = `New Unique value 3`;

// Attributes and Style******************************************

let p = document.querySelector("#para")

//Attributes--------------------------
// let id = p.getAttribute("name");//to get the Attributes value
// console.log(id)
// //----------------------------------
// let id = p.setAttribute("name", "line");//to set the Attributes value
// console.log(id)

//Style-------------------------------
p.style = "border:2px solid black; padding:4px; background-color:red; color:white; font-size:24px"
p.innerText = "This is Style"


//Insert and Delete Elements*************************************
let btn = document.createElement("button")//to create any node
btn.innerText = "click me"

let list = document.querySelector(".list")
list.style = "width:120px; border:2px solid black; padding:4px"

list.append(btn);//adds at the end of node(inside)
// list.prepend(btn);//adds at the start of node(inside)
// list.after(btn);//adds after the node(outside)
// list.before(btn);//adds before the node(outside)
// btn.remove()//for remove the node 'btn'

//-->>read mdn docs about-- i)appendChild() and ii) removeChild()
// list.appendChild(btn)
// list.removeChild(btn)


//Practice Questions---------------------------------------------
// Q1:-
let newBtn = document.createElement("button")
newBtn.innerText = "Click me";
newBtn.style = "margin-top:20px; background-color:red; color:white";

let dply = document.querySelector("body")
dply.append(newBtn)

// Q2:-
let head = document.querySelector(".heading")

// head.setAttribute("class", "newClass")//override style 'newClass'
//--------------------------------------------------
//-->classList-- It sis collection of the class attributes of the element. This can then be used to manipulate the classList

head.classList.add("newClass")//add new class in style 'newClass'

// head.classList.remove("newClass")//remove new class in style 'newClass'


// Events********************************************************

let box = document.querySelector("#evtBox")
let clk = document.querySelector("#click")

// clk.onclick = ()=>{
//     clk.innerText="Done"
//     box.style="width: 100px; height: 100px; border: 2px solid;background-color:red; color:white;"
// }

// clk.btn = ()=>{
//     clk.innerText="Done"
//     box.style="width: 100px; height: 100px; border: 2px solid;background-color:green; color:white;"
// }

// Event Listeners-----------------------------------------
clk.addEventListener("click", () => {
    clk.innerText = "Done"
    box.innerText = "hello"
    box.style = "width: 100px; height: 100px; border: 2px solid;background-color:blue; color:white;"

    console.log("hello")
})

let evt = () => {
    console.log("event listening...")
}
clk.addEventListener("click", evt)

clk.removeEventListener("click", evt);//remove event listener


//Practice Questions---------------------------------------------
//Toggle-->switch in two cases************

// let modeBtn = document.querySelector("#mode");
// let currMode = "light" // dark

// modeBtn.addEventListener("click", ()=>{
//     if (currMode === "light"){
//         currMode = "dark"
//     }
//     else{
//         currMode="light"
//     }
//     console.log(currMode);
// })


//features-->Toggle two casses Dark to Light
let modeBtn = document.querySelector("#mode")
let changeMode = document.querySelector("body")

currMode = "light"
modeBtn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark"
        modeBtn.innerText = "Light"
        modeBtn.style = "background-color:white"
        changeMode.style = "background-color:black"
    }
    else {
        currMode = "light"
        modeBtn.innerText = "Dark"
        modeBtn.style = "background-color:black; color:white"
        changeMode.style = "background-color:dark"
    }
})