const coding = ["java","c++","python","ruby","swift"]


// coding.forEach(function (item){
//     console.log(item)
// })

// coding.forEach( (item)=>{
//     console.log(item)
// } )

function printMe(item){
    console.log(item)
}

// coding.forEach(printMe)

// coding.forEach(function (item,key,arr){
//     console.log(item,key,arr)
// })


const mylanguage = [
    {
        language:"Javascript",
        languageFileName:"js"
    },
    {
        language:"java",
        languageFileName:"java"
    },
    {
        language:"python",
        languageFileName:"py"
    }
]

mylanguage.forEach( (item)=>{
    console.log(item.language)
} )
