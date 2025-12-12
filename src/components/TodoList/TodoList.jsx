import { useContext } from "react"
import { TodoContext } from "../../context/TodoContext"

import todoCss from "./TodoList.module.css"
import TodoItem from "../TodoItem/TodoItem"

const TodoList = () => {

  const {todos, filter, whatToFilter} = useContext(TodoContext)

  return(
    <ul className={todoCss.ul}>
      {filter == "Status" && whatToFilter == "Utförd" &&
        todos.filter(todo => todo.status === true).map((todo) => 
          <TodoItem key={todo.id} todo={todo}/>
      )}

      {filter == "Status" && whatToFilter == "Ej utförd" &&
        todos.filter(todo => todo.status === false).map((todo) => 
          <TodoItem key={todo.id} todo={todo}/>
      )}

      {filter == "Kategori" &&
        todos.filter(todo => todo.category === whatToFilter).map((todo) => 
          <TodoItem key={todo.id} todo={todo}/>
      )}

      {filter == "" &&
        todos.map((todo) => 
          <TodoItem key={todo.id} todo={todo}/>
      )}
  </ul>
  )
}

export default TodoList