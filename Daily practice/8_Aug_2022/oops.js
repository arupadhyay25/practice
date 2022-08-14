let users=[]

class User {
    constructor(n){
        this.organisation = "masai"
    }

    #validateusername(username) {

        // if(username.includes("#")) {
        //     return false;
        // }else{
        //     return true;
        // }

        let value = username.includes("#") ? false : true

        return value;   
    }

    #validatepassword(password){

        let value = password.includes("123") ? false : true;
        
        // password.includes("123") ? showerror():succed;

        return value

    }

    signup(username, password) {

        let isValidated = false

        isValidated = this.#validateusername(username) && this.#validatepassword(password)

        if(isValidated){
            
            this.username = username
            this.password = password

            console.log("User registered succesfully")

            users.push(this)

        }else{
            console.log("please enter valid credential")
        }

    }
}

// let u1 = new User("Abhishek")
// u1.signup("Abhi5228","abhi5228")

// let u2 = new User("Renu")
// u2.signup("renu","renu")

// console.log(users)

u2.validateusername()