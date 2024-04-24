// for(let i = 0; i<=10; i++){
//     for(let j =0;j<=10;j++){
//         console.log(`${i} * ${j} = ${i * j}`)
//     }
//     console.log(`End of ${i} table`)
//     if(i<10){

//         console.log(`Start of ${i+1} table`)
//     }
    
    
// }

// ----------------------------------------

//for of

// const array = [1,2,3,4];
// for(const value of array){
//     console.log(value)
// }

// const greetings = "hello world";
// for(const greet of greetings){
//     console.log(greet)
// }

//Maps 
const map = new Map();
map.set("IN", "India");
map.set("USA", "United states of america");
map.set("FR", "france");
map.set("KSA", "Saudia");
// console.log(map)

for(const [key, value] of map){
    // console.log(key ,":=",value)
}


// const myObj = {
//     game1 : "spiderman",
//     game2 :"game of thrones"
// }
// for(const[key,value] of myObj ){
//     console.log(key,":-", value)
// }
//not iterable for object


const myObj = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby"
}



//for in loop

for(const key in myObj){
    // console.log(`${key} shortcut is for ${myObj[key]}`)
}

const array = [1,2,3,4];
for(const key in array){
    // console.log(array[key])
}

// for each loop


const programming = ["js", "c++", "ruby", "swift", "python"]
// we can declare function printMe
// programming.forEach(printMe)
// programming.forEach((items) => {
//      console.log(items)
    
// });

// function printMe(item){
//     console.log(item)
// }

// programming.forEach((item,index, arr)=>{
//     console.log(item, index, arr)
// })

const myCoding = [
    {
        languageName : "javascript",
        languageFileName: "js"
    },

    {
        languageName : "python",
        languageFileName: "py"
    },
    {
        languageName : "java",
        languageFileName: "java"
    }
]

// myCoding.forEach((item)=>{
// console.log(item.languageName)
// })
//note : foreach won't return any values output we get is undefined



// filter property


const myNums  = [1,2,3,4,5,6,7,8,9,10];
const number1 = myNums.filter((num)=> {
    return num > 4
})
console.log(number1)




