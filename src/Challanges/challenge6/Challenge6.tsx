import { useEffect, useRef, useState } from "react";
import BackToHome from "../../components/BackToHome";

export default function Challenge6() {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0)
  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    if(timerRef.current !=null) return
    timerRef.current = setInterval(() => {
      setTimer((prevTimer) => {
        if(prevTimer >= 10){
          clearInterval(timerRef.current!)
          timerRef.current = null
          return prevTimer
        }
        return prevTimer + 1
      });
  },1000)
  },[])
  return (
    <div className='flex flex-col gap-8 w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-md'>
          <BackToHome />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Challenge6</h2>
          <div className="flex flex-col gap-5 bg-stone-50 w-full justify-center items-center">
            <p className="text-3xl">{count}</p>
            <p className="text-1xl">Time left: {10 - timer} seconds</p>
            {timer != 10 && (
              <button
              onClick={() => setCount((prev) => prev+1)}
              className="bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800 transition" >+</button>
            )}
          </div>
        
        </div>
  )
}
