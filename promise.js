
// // The promise object represents the eventual completion or failure of an asynchronous operations and its resulting value
// // there are three states of promises




// const promiseOne = new Promise(function(resolve, reject){
//     //Do an async task
//     //DB calls, cryptography
//     setTimeout(function(){
//         console.log("Async task is complete")
//         resolve()
//     },1000)
// })
// promiseOne.then(function(){
// console.log("promise consumed")
// });



// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()

//     },1000)

//     }).then(function(){
//         console.log("Async task 2 is done")
//     })

// // const promiseThree = new Promise(function(resolve, reject){
// //     setTimeout(function(){
// //         resolve({username : "ahad", email:"ahad53344@gmail.com"})

// //     },1000)
// // })
// // promiseThree.then(function(user){
// //     console.log(user)
// // })


// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({username: "ahad", password: "122345yui"})

//         }else{
//             reject("Error: something went wrong")
//         }
//     })
// })
// promiseFour
// .then((user) => {
//     console.log(user);
//     return user.username;
// })
// .then((username)=>{
//     console.log(username)
// })
// .catch(function(error){
//     console.log(error)
// })
// .finally(()=>{
//     console.log("The promise is either resolved or rejected")
// })


// const promisefive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({username: "ahad", password: "122345yui"})

//         }else{
//             reject("Error: something went wrong")
//         }

//     },1000)
// })


// //here the async catch ko handle nai kartha hy whereas if the promise is full filled then the execution happens thab promise resolve hogaya aur execution bhi
// // agar Async me catch karne ke liye we have to to use try and catch block

// // async function consumePromiseFive(){

// //     const response  = await promisefive;
// //     console.log(response)
// // }
// // consumePromiseFive()


// async function consumePromiseFive(){
//     try{
//         const response = await promisefive
//         console.log(response)


//     }catch(error){
//         console.log(error)

//     }
// }
// consumePromiseFive()

fetch("https://api.github.com/users/ahad5333")
.then((response) => {
    return response.json()
    
}).then((data)=>{
    console.log(data.name)
}).catch((error)=> console.log(error))




