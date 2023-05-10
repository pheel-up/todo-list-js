import React from 'react'

const ToDo = ({ toDo, toggleToDo }) => {
  const checkBoxChange = (e) => {
    // e.preventDefault()
    toggleToDo(e.target.id)
  }

  return (
    <div id={toDo.id} key={toDo.id + toDo.task} value={toDo.id} name="toDo">
      <input
        id={toDo.id}
        key={toDo.id + toDo.task}
        type="checkbox"
        value={!!toDo.done}
        checked={!!toDo.done}
        onChange={checkBoxChange}
      />
      {toDo.task}
    </div>
  )
}

export default ToDo
