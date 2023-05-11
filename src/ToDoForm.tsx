import React, { useState } from 'react'

const ToDoForm = ({ addTodo }: any) => {
  const [input, setInput] = useState('')

  const onInput = (e: React.ChangeEvent<any>) => {
    setInput(e.target.value)
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
