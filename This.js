// Arrow function
// const user = {
//     username : "ahad",
//     price : 890,
//     welcomeMessage : function(){
//         console.log(`${this.username}, welcome to website`)
//         console.log(this)
//     }


// }
// user.welcomeMessage()
// user.username = "sam";
// user.welcomeMessage()

// console.log(this)


// ---------------------------------------------------

// here the output will be undefined the reason for undefined is that this keyword will not work in function where as it will work in object the above is an example how the working works with this keyword
// function chair(){
//     let username = "ahad"
//     console.log(this.username)
// }
// chair()


// const addTwo = (num1, num2) =>{
//     return num1 + num2;

// }
// console.log(addTwo(2,3))




// ------------------------------------------


//immediately invoked function expressions (IIFE) - Why we use iife the reason is that global scope ke pollution ke problem hoti hy to avoid such kind of things we use iife to work with it


(function chai(){
    console.log("DB connected")
})();


(()=>{
    console.log("DB connected 2")

})();

((name)=>{
    console.log(`DB connected 2 ${name}`)

})("Mohammed Ahadullah");



