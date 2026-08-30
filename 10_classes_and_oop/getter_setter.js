class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get email() {
        return this._email.toUpperCase()
    }

    set email(value) {
        this._email = value
    }

    get password(){
        return `${this._password} avinash`
    }

    set password(value){
        this._password = value
    }
}


const avinash = new User("a@avinash.ai", "abc")
console.log(avinash.password);
console.log(avinash.email);
