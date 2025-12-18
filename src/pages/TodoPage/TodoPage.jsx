
import TodoList from "../../components/TodoList/TodoList"
import TodoForm from "../../components/TodoForm.jsx/TodoForm"

import todoCss from "./TodoPage.module.css"

const TodoPage = () => {

  return(
    <>
      <h2>Ärenden och aktiviteter</h2>
      <div className={todoCss.container}>
        <div className={todoCss.form}>
          <TodoForm/>
        </div>
        
        <div className={todoCss.list}>
          <TodoList/>
        </div>
      </div>
    </>
  )
}

export default TodoPage