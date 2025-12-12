import { useContext } from "react"
import TodoList from "../../components/TodoList/TodoList"
import TodoForm from "../../components/TodoForm.jsx/TodoForm"
import { TodoContext } from "../../context/TodoContext"

import todoCss from "./TodoPage.module.css"
import TodoSort from "../../components/TodoSort/TodoSort"
import TodoFilter from "../../components/TodoFilter/TodoFilter"


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
          <TodoSort/>
          <TodoFilter/>
          <TodoList/>
        </div>
      </div>
    </>
  )
}

export default TodoPage