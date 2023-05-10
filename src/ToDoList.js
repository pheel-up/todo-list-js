import React from 'react'

//components
import ToDo from './ToDo'

const ToDoList = ({ toDoList, toggleToDo, clearCompletedToDos }) => {
  console.log(toDoList)

  return (
    <div id={toDoList.length} key={toDoList.length + 1} name="toDoList">
      {toDoList.map((toDo) => {
        return <ToDo toDo={toDo} toggleToDo={toggleToDo} />
      })}
      <button style={{ margin: '20px' }} onClick={clearCompletedToDos}>
        Remove Completed Tasks
      </button>
    </div>
  )
}

export default ToDoList
