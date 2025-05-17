import { Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
<div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-100 to-gray-200">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-4">React Challenges Hub</h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
      Explore the challenges below. New challenges will be added soon!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-md">
        <Link
          to="/challenge/1"
          className="bg-white rounded-xl shadow hover:shadow-lg p-6 text-center transition duration-300 border hover:border-blue-500"
        >
          <h2 className="text-xl font-semibold text-blue-600">Challenge 1</h2>
          <p className="text-gray-500 text-sm">Show/Hide tittle</p>
        </Link>

        <Link
          to="/challenge/2"
          className="bg-white rounded-xl shadow hover:shadow-lg p-6 text-center transition duration-300 border hover:border-green-500"
        >
          <h2 className="text-xl font-semibold text-green-600">Challenge 2</h2>
          <p className="text-gray-500 text-sm">Stopwatch/Timer</p>
        </Link>

        <Link
          to="/challenge/3"
          className="bg-white rounded-xl shadow hover:shadow-lg p-6 text-center transition duration-300 border hover:border-yellow-500"
        >
          <h2 className="text-xl font-semibold text-yellow-600">Challenge 3</h2>
          <p className="text-gray-500 text-sm">TodoList</p>
        </Link>

        <Link
        to="/challenge/4"
        className="bg-white rounded-xl shadow hover:shadow-lg p-6 text-center transition duration-300 border hover:border-red-500"
        >
        <h2 className="text-xl font-semibold text-red-600">Challenge 4</h2>
        <p className="text-gray-500 text-sm">Progress Bar</p>
        </Link>

        <Link
        to="/challenge/5"
        className="bg-white rounded-xl shadow hover:shadow-lg p-6 text-center transition duration-300 border hover:border-pink-500"
        >
        <h2 className="text-xl font-semibold text-pink-600">Challenge 5</h2>
        <p className="text-gray-500 text-sm">Submit Form Data</p>
        </Link>

        <Link
        to="/challenge/6"
        className="bg-white rounded-xl shadow hover:shadow-lg p-6 text-center transition duration-300 border hover:border-purple-500"
        >
        <h2 className="text-xl font-semibold text-purple-600">Challenge 6</h2>
        <p className="text-gray-500 text-sm">Max count</p>
        </Link>
      </div>
    </div>
  )
}

export default App
