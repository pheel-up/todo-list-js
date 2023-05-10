import React, { useState } from 'react'

const ToDoForm = ({ addTodo }) => {
  const [input, setInput] = useState('')

  const onInput = (e) => {
    setInput(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    addTodo(input)
    setInput('')
  }

  return (
    <form action="" onSubmit={onSubmit}>
      <input
        value={input}
        type="text"
        onChange={onInput}
        placeholder="What do you need to get done?"
      />
      <button>Add ToDo</button>
    </form>
  )
}

export default ToDoForm
