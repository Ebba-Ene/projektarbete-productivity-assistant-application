import { useContext } from "react"
import { TodoContext } from "../../context/TodoContext"

const TodoList = () => {

  const {todos} = useContext(TodoContext)

  return(
      <ul>
        {todos.map((todo, id) => 
        <li key={id}>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
          <p>{todo.status ? "Klar" : "Inte klar"}</p>
          <p>{todo.timeEstimate}</p>
          <p>{todo.category}</p>
          <p>{todo.deadline}</p>
        </li>)} 
      </ul>
  )
}

export default TodoList