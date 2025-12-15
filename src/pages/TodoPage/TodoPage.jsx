import { useContext } from "react"
import TodoList from "../../components/TodoList/TodoList"
import TodoForm from "../../components/TodoForm.jsx/TodoForm"
import { TodoContext } from "../../context/TodoContext"

import todoCss from "./TodoPage.module.css"

const TodoPage = () => {

  const {show, setShow} = useContext(TodoContext)

  return(
    <>
      <h2>Mina ärenden & aktiviteter:</h2>
      <div className={todoCss.container}>

        <div className={todoCss.form}>
          <button onClick={() => {setShow(!show)}}>{!show ? "Skapa ny todo" : "Avsluta"}</button>
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

export default TodoPage