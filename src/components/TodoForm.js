import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("")
  const handleSubmit = e => {
    e.preventDefault();
    addTodo(value)
  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type='text' className='todo-input' placeholder='O que vai fazer hoje?' onChange={(e) => setValue(e.target.value)} />
      <button type='submit' className='todo-btn'>Adicionar</button>
    </form>
  )
}

export default TodoForm