import React, { useState } from 'react'

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
    <div className='p-5'>
      <h2 className='text-3xl'>Challenge2</h2>
      <div>
        <input value={task.city} onChange={(e) => setTask((prev) => ({...prev, city: e.target.value}))} type="text" placeholder='Add City' />
        <button onClick={() => addTask(task)}>Add</button>
      </div>
      <ul>
        {todoList.map((task) => (
          <li>
            {task.city}
            <button onClick={() => removeTask(task.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
