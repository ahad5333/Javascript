const Arr = [0,1,2,3,4];

// console.log(Arr)
// console.log(Arr[0])
// console.log(myHeroes[0])
//To print the array values one by one we can use for loop to print them one by one the below code will display Arr values one by one by using for loop

// for(let i =0 ; i< Arr.length -1 ; i++){
//     console.log(Arr[i])
// }

//Array methods 

// Arr.push(0)
// Arr.pop();
// Arr.unshift(9)
// Arr.shift();

// console.log(Arr.includes(1)) This will give the the value which is present is present or not in true or false form if the value 1 is present then true if not then false

// console.log(Arr.indexOf(2)) will return the index of the element in the array

// const newArr = Arr.join(); converts the types of the Array into string format
// console.log(Arr);
// console.log(newArr);
// console.log(typeof (newArr));


//Slice, splice

// The difference between slice and splice is that slice will take only the portion of array which is defined to slice whereas the splice will remove the portion 
// console.log("A", Arr);
// const myn1 = Arr.slice(1,3);
// console.log(myn1)

// console.log("B", Arr);

// const myn2 = Arr.splice(1,3)
// console.log("c",myn2)

const marvel_heroes = ["Thor", "iron man", "spiderman"];
const Dc  = ["superman", "batman", "flash"];

// marvel_heroes.push(Dc);
// console.log(marvel_heroes)

//Spread operator to combine
const combine = [...marvel_heroes, ...Dc]
console.log(combine)

//concat operator to combine
const allHeroes =marvel_heroes.concat(Dc)
console.log(allHeroes)

const anotherArray = [1,2,3,4,[5,6,7],[8,9],[4,5]];
const real_anotherArray = anotherArray.flat(Infinity)
console.log(real_anotherArray)


console.log(Array.from("ahad"));
console.log(Array.from({name:"ahad"})); //empty error we get interesting case
let score = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score,score2,score3))