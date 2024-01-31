const nums = [1,2,3,4,5,6,7,8,9,10]


// const cost = nums.reduce( function (acc,items) {
//     return acc+items
// },0 )

const cost = nums.reduce( (acc,items) => acc+items,0 )

console.log(cost)