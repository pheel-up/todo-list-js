import React from 'react'

//components
import ToDo from './ToDo'

const ToDoList = ({ toDoList, toggleToDo, clearCompletedToDos }: any) => {
  console.log(toDoList)

  return (
    <fieldset id={toDoList.length} key={toDoList.length + 1}>
      {toDoList.map((toDo: any) => {
        return <ToDo toDo={toDo} toggleToDo={toggleToDo} key={toDo.task} />
      })}
      <button style={{ margin: '20px' }} onClick={clearCompletedToDos}>
        Remove Completed Tasks
      </button>
    </fieldset>
  )
}

export default ToDoList
