import React, { useState } from 'react'

const CreateTodoField = ({ setTodos }) => {
  const [title, setTitle] = useState('')

  const addTodo = title => {
    setTodos(prev => [
      {
        _id: new Date(),
        title,
        isCompleted: false 
      },
      ...prev, 
    ])
    setTitle('')
  }

  console.log(title)

  return (
    <div
      className='flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 px-5 py3 w-full'>
        <input 
          type="text" 
          onChange={el => setTitle(el.target.value)} 
          value={title}
          onKeyPress={event => event.key === 'Enter' && addTodo(title)}
          className='bg-transparent w-full border-none outline-none'
          placeholder='Add a task'
        />
    </div>
  )
}

export default CreateTodoField