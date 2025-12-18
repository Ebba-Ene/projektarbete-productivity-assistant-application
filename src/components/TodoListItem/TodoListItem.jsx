
import { useContext, useState } from "react"
import todoCss from "./TodoListItem.module.css"
import { TodoContext } from "../../context/TodoContext"
import TodoForm from "../TodoForm.jsx/TodoForm"

const TodoListItem = ({todo}) => {

  const { completeTodo, removeTodo } = useContext(TodoContext)

  const[editingTodo, setEditingTodo] = useState(false)

  return(
    <li className={todo.status ? todoCss.completeLi : todoCss.notComplete}>
    {!editingTodo && (
      <>
        <div className={todo.status ? todoCss.complete : ""}>
          <h3>{todo.title}</h3>
          <p className={todoCss.smaller}>{todo.category}</p>
          <p>{todo.description}</p>

          <form className={todoCss.form}>
            <label htmlFor="done">{todo.status ? "Utförd" : "Ej utförd"}</label>
              <input 
                type="checkbox" 
                id="done" 
                checked={todo.status} 
                onChange={() => {completeTodo(todo.id)}}
              />
          </form>
          
          <p>{todo.timeEstimateNumber} {todo.timeEstimateUnit}</p>
          <p className={todoCss.smaller}>{todo.deadline}</p>
        </div>

        <div className={todoCss.buttons}>
          <button onClick={() => {removeTodo(todo.id)}} className={todoCss.removeBtn}>Ta bort</button>
          <button onClick={() => {setEditingTodo(true)}} className={todoCss.editBtn}>Redigera</button>   
        </div>
      </>
    )}

    {editingTodo && 
      <TodoForm 
        todoId={todo.id} 
        editedTitle={todo.title} 
        editedCategory={todo.category} 
        editedDescription={todo.description} 
        editedTimeEstimateUnit={todo.timeEstimateUnit} 
        editedTimeEstimateNumber={todo.timeEstimateNumber} 
        editedDeadline={todo.deadline} 
        editingTodo={true} 
        setEditingTodo={setEditingTodo}
      />
    }
    </li>
  )
}

export default TodoListItem

