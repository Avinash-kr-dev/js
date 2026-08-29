const user = {
    username: "avinash",
    logInCount: 8,
    signedIn: true,

    getuserDetails: function(){
        // console.log("got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}


// console.log(user.username);
// console.log(user.getuserDetails());
// console.log(this);


// const promiseOne = new Promise()
// const date = new Date()

function User(username, logInCount, isLoggedIn) {
    this.username = username;
    this.logInCount = logInCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
        
    }

    return this
}

const userOne = new User("avinash", 12, true)
const userTwo = new User("Chaiaurcode", 11, false)

console.log(userOne.constructor);
// console.log(userTwo);

