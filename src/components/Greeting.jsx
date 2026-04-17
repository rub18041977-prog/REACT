import React from 'react'

function Greeting({name,age}) {
  return (
    <div>
      <h1>Hello {name}</h1>
      <p>Your age is {age}</p>
    </div>
  )
}

export default Greeting
