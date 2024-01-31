const arr = [1,2,3,4,5,6,7,8,9,10]
// foreach loop does't return anything
// const values = arr.forEach( (num)=>{
//     return num
// } )

//const values = arr.filter( (items)=> items>4 )

const values = []

arr.forEach( (items)=>{
    if(items>4){
        values.push(items)
    }
} )
console.log(values)