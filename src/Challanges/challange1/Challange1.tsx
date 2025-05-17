import React, { useState } from 'react'

export default function Challange1() {
  const [istoBeShowed, setIstoBeShowed] = useState(false)
  
  return (
    <>
    <h2>Challange1</h2>

    <button 
      onClick={() => setIstoBeShowed((prev) => !prev)}
    >
      Show/Hide
    </button>

    {istoBeShowed && <p>Wlcome to React Challenges</p>}
      </>
  )
}
