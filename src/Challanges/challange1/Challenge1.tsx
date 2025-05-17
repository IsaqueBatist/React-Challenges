import { useState } from 'react'
import BackToHome from '../../components/BackToHome'

export default function Challange1() {
  const [istoBeShowed, setIstoBeShowed] = useState(false)
  
  return (
    <div className='flex flex-col gap-8 w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-md'>
      <BackToHome />
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Challenge1</h2>

      <button
        onClick={() => setIstoBeShowed((prev) => !prev)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Show/Hide
      </button>

      {istoBeShowed && (
        <p className="mt-4 text-gray-700 text-lg">
          Welcome to React Challenges
        </p>
      )}
    </div>

  )
}
