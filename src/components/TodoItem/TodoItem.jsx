
import { useContext, useState } from "react"
import todoCss from "./TodoItem.module.css"
import { TodoContext } from "../../context/TodoContext"
import TodoForm from "../TodoForm.jsx/TodoForm"

const TodoItem = ({todo}) => {

  const { completeTodo, removeTodo } = useContext(TodoContext)

  const[editingTodo, setEditingTodo] = useState(false)

  return(
    <li className={todo.status ? todoCss.complete : todoCss.notComplete}>
    {!editingTodo && (
      <>
        <h3>{todo.title}</h3>
        <p>{todo.category}</p>
        <p>{todo.description}</p>

        <form>
          <label htmlFor="done">{todo.status ? "Utförd" : "Ej utförd"}</label>
          {!todo.status &&
            <input type="checkbox" id="done" checked={false} onChange={() => {completeTodo(todo.id)}}/>
          }
          {todo.status &&
            <input type="checkbox" id="done" checked={true} onChange={() => {completeTodo(todo.id)}}/>
          }
        </form>
        
        <p>{todo.timeEstimateNumber} {todo.timeEstimateUnit}</p>
        <p>{todo.deadline}</p>

        <button onClick={() => {removeTodo(todo.id)}}>Ta bort</button>
        <button onClick={() => {setEditingTodo(true)}}>Redigera</button>   
      </>
    )}
    {editingTodo && 
    <TodoForm todoId={todo.id} editedTitle={todo.title} editedCategory={todo.category} editedDescription={todo.description} editedTimeEstimateUnit={todo.timeEstimateUnit} editedTimeEstimateNumber={todo.timeEstimateNumber} editedDeadline={todo.deadline} editingTodo={true} setEditingTodo={setEditingTodo}/>
    }
    </li>
  )
}

export default TodoItem

