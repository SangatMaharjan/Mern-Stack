let ar1=[9,10,11,12]
let ar2=[12,13,14,15,16]

let ar3=[8,...ar1]

let ar5=[...ar1 ,...ar1]

console.log(ar3)

console.log(ar5)

// Basically that ... is to open the wrapper \

let info1={name:"Sherfane" , age : 25 }
let info2={address:"ktm"}

let info={ ...info1, ...info2}
console.log(info)

let info3={name:"Jacob", age : 25}
let info4={name:"Jason" , age : 40}

let info5 = {...info3 , ...info4}
console.log(info5)