import { useContext } from "react"
import { TodoContext } from "../../context/TodoContext"

import todoCss from "./TodoList.module.css"
import TodoListItem from "../TodoListItem/TodoListItem"
import TodoSort from "../TodoSort/TodoSort"
import TodoFilter from "../TodoFilter/TodoFilter"
import { UserContext } from "../../context/UserContext"

const TodoList = () => {

  const {todos, filter, whatToFilter, sort, howToSort} = useContext(TodoContext)
  const {currentUser} = useContext(UserContext)

  const timeToMinutes = (time) => {
    const units = {minut: 1, minuter: 1, timme: 60, timmar: 60, dag: 1440, dagar: 1440}

    const parts = time.match(/^(\d+)\s(minut|minuter|timme|timmar|dag|dagar)$/)

    if(!parts)
      throw new Error(`'${time}' - Unexpected time format`)
      const scalar = parseInt(parts[1])
      const minutes = units[parts[2]]

    return minutes*scalar
    }

    const userTodos = todos.filter(todo => todo.userId === currentUser.userId)

    const filterTodos = userTodos.filter(todo => {
    if (filter === "Status" && whatToFilter === "Utförd") {
      return todo.status === true
    }
    if (filter === "Status" && whatToFilter === "Ej utförd") {
      return todo.status === false
    }
    if (filter === "Kategori") {
      return todo.category === whatToFilter
    }
    return true
  })
  
    const sortedTodos = [...filterTodos].sort((a, b) => {
      if (sort === "Status") {
        return howToSort === "Fallande" ? a.status - b.status : b.status - a.status
      }
      if (sort === "Deadline") {
        return howToSort === "Fallande"
        ? new Date(a.deadline) - new Date(b.deadline)
        : new Date(b.deadline) - new Date(a.deadline)
      }
      if (sort === "Tidsestimat") {
        return howToSort === "Fallande"
        ? timeToMinutes(`${a.timeEstimateNumber} ${a.timeEstimateUnit}`) - timeToMinutes(`${b.timeEstimateNumber} ${b.timeEstimateUnit}`)
        : timeToMinutes(`${b.timeEstimateNumber} ${b.timeEstimateUnit}`) - timeToMinutes(`${a.timeEstimateNumber} ${a.timeEstimateUnit}`)
      }
      return 0
    })
  

  // const filterTodos = todos.filter(todo => {
  //   if (filter === "Status" && whatToFilter === "Utförd") {
  //     return todo.status === true
  //   }
  //   if (filter === "Status" && whatToFilter === "Ej utförd") {
  //     return todo.status === false
  //   }
  //   if (filter === "Kategori") {
  //     return todo.category === whatToFilter
  //   }
  //   return true
  // })
  
  // const sortedTodos = [...filterTodos].sort((a, b) => {
  //   if (sort === "Status") {
  //     return howToSort === "Fallande" ? a.status - b.status : b.status - a.status
  //   }
  //   if (sort === "Deadline") {
  //     return howToSort === "Fallande"
  //     ? new Date(a.deadline) - new Date(b.deadline)
  //     : new Date(b.deadline) - new Date(a.deadline)
  //   }
  //   if (sort === "Tidsestimat") {
  //     return howToSort === "Fallande"
  //     ? timeToMinutes(`${a.timeEstimateNumber} ${a.timeEstimateUnit}`) - timeToMinutes(`${b.timeEstimateNumber} ${b.timeEstimateUnit}`)
  //     : timeToMinutes(`${b.timeEstimateNumber} ${b.timeEstimateUnit}`) - timeToMinutes(`${a.timeEstimateNumber} ${a.timeEstimateUnit}`)
  //   }
  //   return 0
  // })

  return(
    <div>
      <TodoSort/>
      <TodoFilter/>
      <ul className={todoCss.ul}>
        {sortedTodos.map(todo =>(
          <TodoListItem key={todo.id} todo={todo}/>
        ))}
      </ul>
    </div>
  )
}

export default TodoList