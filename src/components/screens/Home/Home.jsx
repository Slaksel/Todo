import TodoItem from './item/TodoItem';
import { useState } from 'react'
import CreateTodoField from './create-todo-field/CreateTodoField';

const data = [
  {
    _id: 'wgds1',
    title: 'Finish the assay collabiration',
    isCompleted: false,
  },
  {
    _id: 'fsfsdf1',
    title: 'Read next chapter of the book',
    isCompleted: false,
  },
  {
    _id: 'gdfw23',
    title: 'Send the finished assigment',
    isCompleted: false,
  },
]

const Home = () => {
  const [todos, setTodos] = useState(data);

  const changeTodo = id => {
    const copy = [...todos]
    const current = copy.find(t => t._id === id)
    current.isCompleted = !current.isCompleted
    setTodos(copy);
  };

  const removeTodo = id => {
    setTodos([...todos].filter(todo => todo._id !== id))
  };

  // window.addTodo = addTodo
  
  return (
    <div className='text-white w-4/5 mx-auto'>
      <h1 className=' text-2xl font-bold text-center mb-10'>Todo for all</h1>
      {todos.map(todo => (
        <TodoItem 
          key={todo._id} 
          todo={todo} 
          changeTodo={changeTodo} 
          removeTodo={removeTodo}
        />
      ))}
      <CreateTodoField 
        setTodos={setTodos}
      />
    </div>
  )
}

export default Home