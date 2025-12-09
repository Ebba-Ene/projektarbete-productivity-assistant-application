import { useState, useContext } from "react"
import TodoList from "../../components/TodoList/TodoList"
import TodoForm from "../../components/TodoForm.jsx/TodoForm"
import { TodoContext } from "../../context/TodoContext"

import todoCss from "./Todo.module.css"


const Todo = () => {

  const {show, setShow} = useContext(TodoContext)

  return(
    <>
      <h1>Mina todos:</h1>
      <div className={todoCss.container}>

        <div className={todoCss.form}>
          <button onClick={() => {setShow(true)}}>Skapa ny todo</button>
          {show && 
          <TodoForm/>}
        </div>
        <div className={todoCss.list}>
          <TodoList/>
        </div>
      </div>
    </>
  )
}

export default Todo