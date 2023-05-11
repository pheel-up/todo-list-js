import React from 'react'

const ToDo = ({ toDo, toggleToDo }: any) => {
  const checkBoxChange = (e: React.ChangeEvent<any>) => {
    // e.preventDefault() - having this statement uncommented is what prevented me from getting the exercise turned in ontime | danger of taking advice from the internet
    toggleToDo(e.target.id)
  }

  return (
    <fieldset id={toDo.id} key={toDo.id + toDo.task}>
      <input
        id={toDo.id}
        key={toDo.id + toDo.task}
        type="checkbox"
        checked={!!toDo.done}
        onChange={checkBoxChange}
      />
      {toDo.task}
    </fieldset>
  )
}

export default ToDo
