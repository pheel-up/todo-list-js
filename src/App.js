import React, { useState } from 'react'
import './App.css'

//components
import Header from './Header'
import ToDoList from './ToDoList'
import ToDoForm from './ToDoForm'

// test data
import data from './data.json'

function App() {
  const [toDoList, setToDoList] = useState(data)

  const toggleToDo = (toDoId) => {
    let toDoToggled = toDoList.map((toDo) => {
      // console.log({ ...toDo, done: !toDo.done })
      return toDo.id === Number(toDoId)
        ? { ...toDo, done: !toDo.done }
        : { ...toDo }
    })

    setToDoList(toDoToggled)
  }

  const addToDo = (input) => {
    let toDoListCopy = [...toDoList]
    toDoListCopy = [
      ...toDoListCopy,
      { id: toDoList.length + 1, task: input, done: false },
    ]
    setToDoList(toDoListCopy)
  }

  const clearCompletedToDos = () => {
    let toDoListCopy = [...toDoList]
    toDoListCopy = toDoList.filter((toDo) => {
      return !toDo.done
    })
    setToDoList(toDoListCopy)
  }

  return (
    <div>
      <Header />
      <ToDoList
        toDoList={toDoList}
        toggleToDo={toggleToDo}
        clearCompletedToDos={clearCompletedToDos}
      />
      <ToDoForm addTodo={addToDo} />
    </div>
  )
}

export default App
