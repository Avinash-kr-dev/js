// if
// const isUserLoggedIn = true
// const temperature = 42

// if (temperature === 32) {
//     console.log("executed");
// } else {
//     console.log("temperature is greater than 50");
// }

// <, >, <=, >=, ==, !=,  ===

// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`User power ${power}`);
// }
// console.log(`User power ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"), console.log("test");

// if (balance < 500 ) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allowed to buy courses");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}