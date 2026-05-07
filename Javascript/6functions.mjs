// define arrow function 

//First class function : A variable itself can be a function 
let fun1=()=>
{
    console.log("This is an arrow function ");
}

//calling the function 
console.log("a")
fun1()
console.log("b")
fun1

// Parameterized function 

let fun2=(name , surname , age)=>
    {
    console.log(name , surname , age)
}

fun2("Sangat", "Maharjan ",20)

