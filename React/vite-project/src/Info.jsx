import React from 'react'

const Info = ({name,surname,age}) => {
  return (
    <div>
        <h1>Attributes</h1>
        <p>name is {name}</p>
        <p>surname is {surname}</p>
        <p>{name} is {age} years old</p>
      
    </div>
  )
}

export default Info
