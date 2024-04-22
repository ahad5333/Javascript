// function hello(){


    
//         console.log("hello dofjashdf");
    
// }
// hello we get reference
//hello() we call the function value

// function addTwoNumbers (number1, number2){
//     console.log(number1 + number2);
// }
// const result = addTwoNumbers(3,4)
// console.log(result)
//Here we get output as undefined the reason for it to show undefined is that console.log don't return a value to return a value we have to define the code the below

// function addTwoNumbers (number1, number2){
    //first way to declare
    // let result = number1 + number2;
    // return result


   //Another way to declare
//     return number1 + number2
// }
// const result = addTwoNumbers(3,4)
// console.log("Result :" +result)

// function loginUserMessage(username = "sam"){
//     if(username === undefined){
//         console.log("please enter username")
//         return
//     }
//     return `Hello ${username}`;

// }
 // console.log(loginUserMessage("ahad"))
// console.log(loginUserMessage("ahad"))


function CalculateCartPrice(...num1){
    //Rest operator ...num1

    return num1;

}
const value = CalculateCartPrice(23, 56, 78)
for(let i = 0 ; i< value.length  ; i++){
    console.log(value[i])
}

const user  = {
    username : "ahad",
    price: 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}
handleObject(user)

const myNewArray = [100, 200, 400];
function returnSecondValue(getArray){
    return getArray[2]
}
console.log(returnSecondValue(myNewArray))
