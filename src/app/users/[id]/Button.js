'use client'
import React from 'react'

function Button({item}) {
  return (
    <div>
      <button onClick={()=>alert("Hi sweety!! "+item)}>Click me </button>
      {/* {console.log(value)} */}
    </div>
  )
}

export default Button
