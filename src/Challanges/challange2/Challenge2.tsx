import { useRef, useState } from 'react'
import BackToHome from '../../components/BackToHome';

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
<div className="flex flex-col gap-8 w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-md">
  <BackToHome />
  <h2 className="text-3xl font-bold text-gray-800">Challenge2</h2>

  <div className="space-y-1">
    <p className="text-xl font-bold text-gray-700">Timer</p>
    <div className="text-lg text-gray-600">
      <span>{formatTime(Math.floor(timer / 60))} mins </span>
      <span>{formatTime(timer % 60)} secs</span>
    </div>
  </div>

  <div className="flex flex-row gap-4">
    <button
      onClick={startTimer}
      className="bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800 transition"
    >
      Start
    </button>
    <button
      onClick={stopTimer}
      className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition"
    >
      Stop
    </button>
    <button
      onClick={resetTimer}
      className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition"
    >
      Reset
    </button>
  </div>
</div>

  )
}
