// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

const promiseOne = new Promise(function (resolve,reject) {
    // do any asyn task
    // DB call ,network ,crytography
    setTimeout(function () {
        console.log("Asyn task is compeleted")
        resolve()
    },1000)
})

promiseOne.then(function() {
    console.log("promise consumed")
})

new Promise(function (resolve,reject) {
    setTimeout(function () {
        console.log("Asyn task 2 is compeleted")
        resolve()
    },1000)
}).then(function(){
    console.log("promise 2 consumed")
})

const promiseThree = new Promise(function(resolve,reject) {
    setTimeout(()=>{
        console.log("Asyn task 3")
        resolve({userName : "Rahul",email : "rkkraj500@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function (){
        let error = false
        if(!error){
            resolve({userName:"Rahul",password:"1234"})
        }else{
            reject('Error :Something went worng')
        }
    },1000)  
})

const user = promiseFour
.then(function(user) {
    return user
})
.then(function(user){
    console.log(user)
})
.catch(function(error) {
    console.log(error)
})
.finally(()=> console.log("Promises is either resolve or reject"))


const promiseFive = new Promise(function(resolve,reject) {
    setTimeout(function (){
        let error = true
        if(!error){
            resolve({userName:"javascript",password:"1234"})
        }else{
            reject('ERROR : js went worng')
        }
    },1000)
})

async function consumePromiseFive(){
   
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()



// async function getAllUsers(){
//     try {
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log('E :',error)
//     }
// }

// getAllUsers()


fetch('https://api.github.com/users/hiteshchoudhary')
.then(function(response) {
    const data = response.json()
    return data
})
.then(function (data){
    console.log(data)
})
.catch(function (error) {
    console.log("E: ",error)
})
