import Address from "./Address"
import Father from "./Father"
import Info from "./Info"
import Mother from "./Mother"

const App = ()=>{

  // div is for wrapping the h1 and p elements together
/*   
  return(<div>
    <h1>Hello World</h1>
    <p>This is a Vite project</p>
  </div> */

  let name = "Vite"
  let surname = "Project"

  let products = [
    
      {name : "Laptop" , price : 130000 , _id : 1 , quantity :10 , image : "laptop.avif"} , 
      { name : "Mobile" , price : 30000 , _id : 2 , quantity: 20 , image : "mobile.avif" } , 
      { name : "Tablet" , price : 50000 , _id : 3 , quantity: 15 , image : "tablet.jpg" }
      

  ]
  
  return (
    <div>
      <h1 style={{backgroundColor:"green", width: "100px"}}>Details</h1>
      <p style = {{color : "red"}}>Name : {name}</p>
      <p style = {{border: "solid red 6px"}}>Surname : {surname}</p>
      <p>Sum is {1 + 2}</p>
      <p>Full Name : {name + " " + surname}</p>
      {/* <img src="laptop.avif" width="200px" height="200px"></img> */}

      {
        products.map((item,i)=>
        {return <div style = {{border: "solid blue 2px"}}> 
        <img src={item.image} width = "300px" height = "300px"></img>
          <p>product name is {item.name}</p> 
          <p>product price is {item.price}</p>
        <p>quantity is {item.quantity}</p>
       </div>
}) }
<Address country="Nepal" city="Kathmandu" province={3}></Address> 
<Father name="Jacob" surname="Paul" age={41} profession="Vandalism"></Father>
<Mother name="Angelina" surname="Jolie" age={48} profession="Actress"></Mother>
<Info name="Wangchuk" surname="Muji" age={16}></Info>{/* Calling Components */}
<p className="success">This is success message</p>
<p className="error">This is error message</p>
<p className="warning">This is warning message</p>
<LearnUseState></LearnUseState>
    </div>
  )

}

export default App;
