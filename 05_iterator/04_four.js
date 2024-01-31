const lan = {
    js: "javascript",
    cpp:"C++",
    swift:"Swift",
    py:"Python"
}

for (const key in lan) {
    //console.log(`${key} -> ${lan[key]}`)
}

const arr = ["js","swift","cpp","py"]

for (const key in arr) {
 //  console.log(`${key}->${arr[key]}`)
}

// map is not itarable
const myMap = new Map()

myMap.set("IN","India")
myMap.set("Fr","France")
myMap.set("UK","England")
myMap.set("UK","England")

for (const key in myMap) {
    console.log(key)
}