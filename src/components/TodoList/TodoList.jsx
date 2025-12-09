import { useContext, useState } from "react"
import { TodoContext } from "../../context/TodoContext"

import todoCss from "./TodoList.module.css"

const TodoList = () => {

  const {todos, completeTodo} = useContext(TodoContext)
  const [isChecked, setIsChecked] = useState(todos)

  console.log(todos)

  return(
      <ul className={todoCss.ul}>
        {todos.map((todo, id) => 
        <li key={id} className={todo.status ? todoCss.complete : todoCss.notComplete}>
          <h3>{todo.title}</h3>
          <p>{todo.category}</p>
          <p>{todo.description}</p>

          <form>
            <label htmlFor="done">{todo.status ? "Klar" : "Inte klar"}</label>
            {!todo.status &&
              <input type="checkbox" id="done" checked={false} onChange={() => {completeTodo(id), console.log(todo.status)}}/>
            }
            {todo.status &&
              <input type="checkbox" id="done" checked={true} onChange={() => {completeTodo(id), console.log(todo.status)}}/>
            }
          </form>
          
          <p>{todo.timeEstimateNumber} {todo.timeEstimate}</p>
          <p>{todo.deadline}</p>
        </li>)} 
      </ul>
  )
}

export default TodoList