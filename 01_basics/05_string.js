const name = "Rahul"

const repoCount = 40

console.log(name + repoCount + " values") // out dated method

console.log(`Hello my name is ${name} and repo count is ${repoCount}`) // Modern way


const gameName = "Rahul Kumar"

console.log(gameName[0]);
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('h'))




const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));