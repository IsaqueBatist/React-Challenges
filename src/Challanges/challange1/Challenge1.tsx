import { useState } from 'react'

export default function Challange1() {
  const [istoBeShowed, setIstoBeShowed] = useState(false)
  
  return (
    <>
    <h2 className='text-3x1'>Challange1</h2>
    <button 
      onClick={() => setIstoBeShowed((prev) => !prev)}
    >
      Show/Hide
    </button>

    {istoBeShowed && <p>Wlcome to React Challenges</p>}
      </>
  )
}
