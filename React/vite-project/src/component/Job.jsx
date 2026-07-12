import React from 'react'
import { useParams } from 'react-router-dom'

const Job = () => {
    let params = useParams()
    console.log(params)

    return (
    <div>
        This is Job Page
      
    </div>
  )
}

export default Job
