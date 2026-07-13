import React from 'react'

const Mother = ({name,surname,age,profession}) => {
  return (
    <div>
        <h1>Mother Attributes</h1>
        <p>Name : {name}</p>
        <p>Surname: {surname}</p>
        <p>Age: {age}</p>
        <p>Profession : {profession}</p> 
    </div>
  )
}

export default Mother
