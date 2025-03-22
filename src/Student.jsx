import React from 'react'

function Student(props){


  return (
    <div>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Is bording Student: {props.isStuent ? "Yes" : "No"}</p>
      
    </div>
  )
}
export default  Student

