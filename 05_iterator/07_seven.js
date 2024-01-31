let arr = [1,2,3,4,5,6,7,8,9,10]

///arr = arr.map( (items)=> items+10 )
arr = arr.map( (items)=>items+10 ).map( (items)=> items+10 )
console.log(arr)