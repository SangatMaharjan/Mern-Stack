let info =["nicolas" , "delap" , "garnacho", 30 , false]

console.log(info)
console.log(info[0])

info[2]="garnacho1"
console.log(info[2])

// To push into an array from the back 

info.push("a","b")
console.log(info)
 // To push into an array from the front 
info.unshift("z")
console.log(info)

//To pop from the front 

info.shift()
info.shift()
console.log(info)

let info1=
{
    name: "nicolas",
    weight:65,
    isMarried : false
};
console.log(info1)
console.log(info1.weight)

info1.weight=70
console.log(info1.weight)

info1.isMarried=true
console.log(info1.isMarried)