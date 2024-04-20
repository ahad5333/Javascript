//singleton
//object.create

//object literals

// const mySym = Symbol("key1");

// const JsUser = {
//     name : "AHAD",
//     "fullname" : "Mohammed ahadullah",
//     [mySym] : "mykey1",
//     age: 19,
//     location : "Hyderabad",
//     email : "ahad53344@gmail.com",
//     lastLogin : ["monday", "Saturday"]

// }

// console.log(JsUser.name)
// console.log(JsUser["location"])
// console.log(JsUser["fullname"])
// console.log(JsUser[mySym])
// JsUser.email = "ahad@gamil.com";
// JsUser.email = "adkhfasd@gamil.com";
// JsUser.greeting = function(){
//     console.log("hello js user")

// }
// JsUser.greeting2 = function(){
//     console.log(`Hello js user. ${this.name}`)

// }
// console.log(JsUser.greeting())
// console.log(JsUser.greeting2())

// console.log(JsUser)



//part - 2 --------------------------

// const tinderuser = new Object();//singleton object define

// const tinderUser = {};
// tinderUser.id  = "12233"
// tinderUser.name ="sammy"
// tinderUser.isLoggedIn = false
// // console.log(tinderUser);
// const regularUser = {
//     email : "name@gmail.com",
//     fullname:{
//         userFullName : {
//             fullname: "Mohammed",
//             lastname : "ullah",
//         }
//     }

// }
// console.log(regularUser.fullname.userFullName)

//spread operator in object

// const object1 = {1: "a",2:"b"}
// const object2 = {3: "c", 4: "d"};
// const newObject ={...object1, ...object2};
// console.log(newObject)

// const user = [
//     {

//     },
//     {

//     },
//     {

//     },
//     {

//     }
    

// ]
// user[1].email
// console.log(tinderUser)

// Converting into array from object
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty("name"))

// part - 3 -------------------


// Destructuring

const course = {
    courname :"js in hindi",
    price : "$999",
    courseInstructor : "ahad"
}
const {courname: instructor
} = course
console.log(instructor);

