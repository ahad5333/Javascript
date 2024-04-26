const user = {
    username: "ahad",
    loginCount : 5,
    signedIn : true,
    getUserDetails : function(){
        //console.log("God user details from database")
        console.log(`My name is ${this.username} and the my  logging count is ${this.loginCount}`)
        console.log(this)
    }

}

// console.log(user.loginCount)
// console.log(user.getUserDetails())

//constructor function

 function User(username, loginCount, isLoggedin){
   this.username = username
   this.loginCount = loginCount;
   this.isLoggedin = isLoggedin;
   return this
 }
//  ---------------------------
 //step1: new use karetho empty object create karata hy 
 //step2 :constructor function call hota hy new key word ke karan
 //step3:this keyword ke andar inject hojata 
 //step4:execution hojayega last me
//  -----------------------------------
 const userOne  = new User("ahad", 2, true)
 const userTwo = new User("hitesh", 3, false)
//  console.log(userOne)
//  console.log(userTwo)