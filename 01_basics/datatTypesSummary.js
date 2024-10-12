//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id === anotherId);

const bigNumber = 3456543576654356754n;

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "hitesh",
  age: 22,
};

const myFunction = function () {
  console.log("Hello world");
};

console.log(typeof bigNumber);

// https://262.ecma-international.org/5.1/#sec-11.4.3

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function // actually it is a object function since func is a type of object which implement [[Call]]
       Object  =>  object

*/



// stack (Primitive - call by value) and Heap (Non-Promitive - call by reference)

const str = "Vedant"
let copyStr = str

// console.table([str,copyStr]) // output is same..

copyStr = "Rahul"
// console.table([copyStr, str]) // original str variable value is same and copyStr variable value is now changed to Rahul

/*
In primitive data types, only a copy of the originial value is passed to the another dataytype
In above example : str variable original reference is untouched and a copy of its value is passed down to copyStr variable
so even though i have changed the copyStr value to Rahul, the og Str value is same because it being called by value
*/

copyStr = "Rahul"
// console.table([copyStr, str]) // original str variable value is same and copyStr variable value is now changed to Rahul


let userOne = {
    email : "vedant@google.com",
    age : 24
}

let userTwo = userOne

console.log(userTwo); //same output

userTwo.email = "johari@gmail.com"

console.table([userOne,userTwo])

/*
In case of non-primitive, they are called by reference so their original is also changes when we change the new varibale named userTwo. Reason : - pointing towards the same reference 
*/
