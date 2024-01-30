// array

const myArr = [1,2,3,4,5,"rahul",true]
//console.log(myArr[0])

// Array method

myArr.push(6) // push at last
//console.log(myArr)
myArr.pop() // remove from last
//console.log(myArr)

myArr.unshift(9) // insert at first
//console.log(myArr)

myArr.shift() // Remove from first
//console.log(myArr)

//console.log(myArr.includes(9)) // For check element is present or not

//console.log(myArr.indexOf(3)) // To get the index of element

const newArr = myArr.join() // To join the all element and converted in string

console.log(typeof newArr)

// slice => This will not change orginal array and splice  => Change the original array

const myn1 = myArr.slice(1,3)
console.log("A ",myArr)
console.log(myn1)

const myn2 = myArr.splice(1,3);
console.log("B", myArr)
console.log(myn2)









// Some more in array

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));


