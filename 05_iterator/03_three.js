// forof

const arr = [1,2,3,4,5,6]

for (const Val of arr) {
   // console.log(Val);
}

const greeting  = "Hello world!"

for (const greet of greeting) {
    //console.log(`Each char ${greet}`)
}

const myMap = new Map()

myMap.set("IN","India")
myMap.set("Fr","France")
myMap.set("UK","England")
myMap.set("UK","England")

for (const [key, Value] of myMap) {
    //console.log(key, ":->",Value)
}

const myObj = {
    userName: "Rahul",
    price: 999,
    website: "Google"
}
// for of loop not work for object
for (const [key,value] of myObj) {
    console.log(key, ":->",Value)
}