import { useEffect, useState } from 'react'
import BackToHome from '../../components/BackToHome'

export default function Challenge4() {
  const [value, setValue] = useState(0);


  useEffect(() => {
    if(value < 0 || value > 100) {
      alert("This value is not valid");
    }

  }, [value])
  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-2xl shadow-md space-y-6">
    <BackToHome />
  
    <h2 className="text-3xl font-bold text-gray-800">Challenge4</h2>
  
    <div className="space-y-4">
      {/* ProgressBar */}
      <div className="bg-gray-200 rounded-full h-6 w-full overflow-hidden">
        <div
          className="bg-blue-600 h-full text-white text-sm font-medium flex items-center justify-center transition-all duration-300"
          style={{ width: `${value}%` }}
        >
          {value}%
        </div>
      </div>
  
      {/* Input */}
      <form className="space-y-2">
        <label htmlFor="ivalue" className="block text-sm font-semibold text-gray-700">
          Input Percentage:
        </label>
        <input
          type="number"
          id="ivalue"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter a value from 0 to 100"
          onChange={e => setValue(Number(e.target.value))}
        />
      </form>
    </div>
  </div>
  
  )
}
