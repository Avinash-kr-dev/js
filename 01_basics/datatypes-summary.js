// # Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 345465678769689678546456546n
// console.log(bigNumber);



// Reference Type (Non Primitive)

// Array, Objects, Function

// const heros = ["shaktiman", "naagraj", "doga"]
// let myObj = {
//     name: "avinash",
//     age: 25,
// }

// const muFunction = function(){
//     console.log("Hello world");
// }

// console.log(typeof heros);


// Primitive DataTypes

// String
const str = "Avinash"
console.log(typeof str); // string

// Number
const nmbr = 213
console.log(typeof nmbr); // number

// Boolean
const bln = true || false
console.log(typeof bln); // boolean

// Null
const nl = null
console.log(typeof nl);  // object

// Undefined
let undfnd;
console.log(typeof undfnd); // undefined (don't use const)

// Symbol
const sym = Symbol(123)
console.log(typeof sym); // symbol

// BigInt
const bgnt = 213421342342342342134234234234234n
console.log(typeof bgnt);  // bigint


// Non-Primitive (reference)

// Array
let arr = ["a", "v", "i"]
console.log(typeof arr);  // object

// Object
let obj = {
    name: "Avinash",
    age: 23,
    isStudent: true
}
console.log(typeof obj);  // object

// Functions
function cat(){
    return `meow`
    
}
console.log(typeof cat);  //function



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) and Heap (Non-Primitive) Memory

let myYoutubeName = "professionalYtuber"
let anotherName = myYoutubeName
anotherName = "Pro aur coffee"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "aviansh@google.com"

console.log(userOne.email);
console.log(userTwo.email);
