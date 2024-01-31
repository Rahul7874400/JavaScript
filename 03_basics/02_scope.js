
// var is always declear as globally

if(true){
    let a = 10
    const b = 20
    var c = 30
}

//console.log(a)
//console.log(b)
console.log(c) // var variable can be access from anywhere 


function one(){
    const userName = "Rahul Kumar"

    function two(){
        const website = "Google"

        console.log(userName+website)
    }

    two()

    //console.log(website)
}

//console.log(userName)

one()



// function
console.log(addOne(5)) // this execute without error
function addOne(num){
    return num+1;
}

// Expression
addTwo(6) // this will throw error
const a = function addTwo(num){
    return num+2
}