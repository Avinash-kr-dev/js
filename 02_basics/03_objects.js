// singleton 
// Object.create

// Object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Avinash",
    "full name": "Avinash Kumar",
    [mySym]: "mySymKey1",
    age: "27",
    location: "Jaipur",
    email: "avinash@google.com",
    isLoggedIn: false,
    lastLogginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log( JsUser[mySym]);

JsUser.email = "avinash@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "avinash@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
