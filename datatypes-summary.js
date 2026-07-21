// # Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 345465678769689678546456546n
console.log(bigNumber);



// Reference Type (Non Primitive)

// Array, Objects, Function

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "avinash",
    age: 25,
}

const muFunction = function(){
    console.log("Hello world");
}

console.log(typeof heros);
