// map loop 

let ar1=[10,20,30,40,50];

let ar =ar1.map((item , i)=> {
    return item * i

})
console.log(ar)

// [10,20,30]=> [20,40,60]

let ar3 = [10,20,30]

let double = ar3.map((item,i )=>{
    return item * 2
})

console.log(double)

// [20,30,10,5]=> [40,60,0,0]

let ar4=[20,30,10,15]

let value = ar4.map((item)=>
{
    if(item >18)
    {
        return item * 2
    }
    else
        return 0
})

console.log(value)

let users =
[

   { name : " john " , age : 42},
    {name : " austin " , age :33},
    {name : " steve " , age : 20},
]

// ["john", "austin ", "steve"] 

let names = users.map((item, i) =>
{
    return item.name
    return item.age
    
})

console.log(names)

