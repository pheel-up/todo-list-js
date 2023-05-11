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
    <form onSubmit={onSubmit} style={styles.form}>
      <input
        value={input}
        type="text"
        onChange={onInput}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        style={styles.input}
        placeholder="What do you need to get done?"
      />
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 disabled:opacity-25"
        disabled={input.length === 0}
      >
        Add ToDo
      </button>
    </form>
  )
}

const styles = {
  input: {
    margin: '0px 10px 6px 0px',
    width: '75%',
  },
  form: {
    margin: '0px 0px 0px 100px',
  },
  button: {},
} as const

export default ToDoForm
