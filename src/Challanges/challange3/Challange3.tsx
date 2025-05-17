import { useState } from 'react'
import BackToHome from '../../components/BackToHome'

interface ITodoList {
  id: number,
  city: string
}

export default function Challange3() {
  const [todoList, setTodoList] = useState<ITodoList[]>([])
  const [task, setTask] = useState<ITodoList>({} as ITodoList)

  const addTask = (task: ITodoList) => {
    task.id = todoList.length + 1;
    setTodoList((prev) => [...prev, task])
    setTask({
      id: 0,
      city: ""
    })
  }

  const removeTask = (taskID: number) => {
    const newTodoList: ITodoList[] = todoList.filter((task) => task.id != taskID)
    setTodoList(newTodoList)
  }

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <BackToHome />
  <h2 className="text-3xl font-bold text-gray-800">Challenge3</h2>
  
  <div className="flex gap-2">
    <input
      value={task.city}
      onChange={(e) => setTask((prev) => ({ ...prev, city: e.target.value }))}
      type="text"
      placeholder="Add City"
      className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      onClick={() => addTask(task)}
      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
    >
      Add
    </button>
  </div>

  <ul className="space-y-2">
    {todoList.map((task) => (
      <li
        key={task.id}
        className="flex justify-between items-center px-4 py-2 bg-gray-100 rounded-md"
      >
        <span className="text-gray-700">{task.city}</span>
        <button
          onClick={() => removeTask(task.id)}
          className="text-red-500 hover:text-red-700"
        >
          X
        </button>
      </li>
    ))}
  </ul>
</div>

  )
}
