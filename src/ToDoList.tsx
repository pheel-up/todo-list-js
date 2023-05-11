import React from 'react'

//components
import ToDo from './ToDo'

const ToDoList = ({ toDoList, toggleToDo, clearCompletedToDos }: any) => {
  console.log(toDoList)

  return (
    <div id={toDoList.length} key={toDoList.length + 1} style={styles.div}>
      {toDoList.map((toDo: any) => {
        return <ToDo toDo={toDo} toggleToDo={toggleToDo} key={toDo.task} />
      })}
      <button
        onClick={clearCompletedToDos}
        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        Remove Completed Tasks
      </button>
    </div>
  )
}

const styles = {
  div: {
    margin: '0px 0px 0px 100px',
  },
} as const

export default ToDoList
