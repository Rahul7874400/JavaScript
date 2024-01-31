const user = {
    userName: "Rahul Kumar",
    price:9999,

    welcomeMessage : function (){
        console.log(`${this.userName}, Welcome to the website`)
        console.log(this)
    }

    
}

//user.welcomeMessage()
user.userName = "Sam"
//user.welcomeMessage()
//console.log(this)


// function chai(){
//     userName = "Rahul Kumar"
//     console.log(this.userName) // here we can use this keyword

// }

// const chai = function(){
//     userName = "Rahul Kumar"
//     console.log(this.userName) // here we can use this keyword

// }

// const chai = () =>{
//     userName = "Rahul Kumar"
//     console.log(this.userName) // here we cannot use this keyword
// }

// chai()


// Arrow function
// const add = (num1,num2) => {
//     return num1 + num2
// }

// implicit return Arrow function
//const add = (num1,num2) =>  (num1+num2)
const add = () => ({userName : "Rahul Kumar"})
console.log(add())