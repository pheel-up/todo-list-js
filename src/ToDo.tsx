import React from 'react'

const ToDo = ({ toDo, toggleToDo }: any) => {
  const checkBoxChange = (e: React.ChangeEvent<any>) => {
    // e.preventDefault() - having this statement uncommented is what prevented me from getting the exercise turned in ontime | danger of taking 'EXPERT' advice from the internet
    toggleToDo(e.target.id)
  }

  return (
    <div id={toDo.id} key={toDo.id + toDo.task} className="">
      <label
        htmlFor=""
        className="relative flex cursor-pointer items-center rounded-full p-3"
      >
        <input
          id={toDo.id}
          key={toDo.id + toDo.task}
          type="checkbox"
          checked={!!toDo.done}
          onChange={checkBoxChange}
          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
          style={styles.input}
        />
        {toDo.task}
      </label>
    </div>
  )
}

const styles = {
  input: {
    margin: '0px 10px 0px 0px',
  },
} as const

export default ToDo
