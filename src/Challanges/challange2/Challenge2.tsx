import { useRef, useState } from 'react'

export default function Challenge2() {
  const [timer, setTimer] = useState(0);
  const timerRef = useRef<number | null>(null)

  const startTimer = () => {
    if(timerRef.current != null) return;
    timerRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  }

  const stopTimer = () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null
    }

  }

  const resetTimer = () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current)
      setTimer(0)
      timerRef.current = null
    }
  }

  const formatTime = (value: number): string =>
    String(value).padStart(2, "0");


  return (
    <div className='flex flex-col gap-[30px] w-1/2'>
    <h2 className='text-3xl'>Challenge2</h2>
    
    <p className='text-2x1 font-bold'>Timer</p>
    <span>{formatTime(Math.floor(timer / 60))} mins </span>
    <span>{formatTime(timer % 60)} secs</span>
    <div className='flex flex-row gap-5'>
      <button onClick={startTimer} className='bg-green-700 py-2 px-4 rounded hover:bg-green-800 cursor-pointer'>Start</button>
      <button onClick={stopTimer} className='bg-red-600 py-2 px-4 rounded hover:bg-red-700 cursor-pointer'>Stop</button>
      <button onClick={resetTimer} className='bg-yellow-500 py-2 px-4 rounded hover:bg-yellow-600 cursor-pointer'>Reset</button>
    </div>
    
    </div>
  )
}
