import { useContext, useState } from "react"
import { TodoContext } from "../../context/TodoContext"

import todoCss from "./TodoList.module.css"

const TodoList = () => {

  const {todos, completeTodo, removeTodo, filter, whatToFilter} = useContext(TodoContext)

  return(
        <ul className={todoCss.ul}>
        
        {filter == "Status" && whatToFilter == "Utförd" &&
          todos.filter(todo => todo.status === true).map((todo, id) => 
        <li key={id} className={todo.status ? todoCss.complete : todoCss.notComplete}>
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
          
          <p>{todo.timeEstimateNumber} {todo.timeEstimate}</p>
          <p>{todo.deadline}</p>

          <button onClick={() => {removeTodo(todo.id)}}>Ta bort</button>
        </li>)
        }
        {filter == "Status" && whatToFilter == "Ej utförd" &&
          todos.filter(todo => todo.status === false).map((todo, id) => 
        <li key={id} className={todo.status ? todoCss.complete : todoCss.notComplete}>
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
          
          <p>{todo.timeEstimateNumber} {todo.timeEstimate}</p>
          <p>{todo.deadline}</p>

          <button onClick={() => {removeTodo(todo.id)}}>Ta bort</button>
        </li>)
        }
        {filter == "" &&
          todos.map((todo, id) => 
          <li key={id} className={todo.status ? todoCss.complete : todoCss.notComplete}>
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
            
            <p>{todo.timeEstimateNumber} {todo.timeEstimate}</p>
            <p>{todo.deadline}</p>

            <button onClick={() => {removeTodo(todo.id)}}>Ta bort</button>
          </li>)
        }
        {filter == "Kategori" &&
          todos.filter(todo => todo.category === whatToFilter).map((todo, id) => 
        <li key={id} className={todo.status ? todoCss.complete : todoCss.notComplete}>
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
          
          <p>{todo.timeEstimateNumber} {todo.timeEstimate}</p>
          <p>{todo.deadline}</p>

          <button onClick={() => {removeTodo(todo.id)}}>Ta bort</button>
        </li>)
        }
      </ul>
  )
}

export default TodoList