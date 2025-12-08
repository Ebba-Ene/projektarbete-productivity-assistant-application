import { useState, useContext } from "react"
import TodoList from "../../components/TodoList/TodoList"
import TodoForm from "../../components/TodoForm.jsx/TodoForm"
import { TodoContext } from "../../context/TodoContext"


const Todo = () => {

  const {show, setShow} = useContext(TodoContext)

  return(
    <div>
      <h1>Mina todos:</h1>
      <button onClick={() => {setShow(true)}}>Skapa ny todo</button>

      {show && 
      <TodoForm/>}
      <TodoList/>
    </div>
  )
}

export default Todo