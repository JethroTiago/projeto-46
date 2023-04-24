import React, {useState} from 'react'

const TodoForm = () => {
  return (
    <form className='TodoForm'>
      <input type='text' className='todo-input' placeholder='O que vai fazer hoje?' />
      <button type='submit' className='todo-btn'>Adicionar</button>
    </form>
  )
}

export default TodoForm