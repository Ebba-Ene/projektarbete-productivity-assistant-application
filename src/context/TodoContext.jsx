import { createContext, useEffect, useState } from "react";

export const TodoContext = createContext()

const TodoProvider = ({children}) => {
  
  const[show, setShow] = useState(false)

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])

useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos))
}, [todos])

  const addTodo = (todo) => {
    setTodos([...todos, todo])
  }

  const removeTodo = (index) => {
    const remainingTodos = todos.filter((_, i) => i !== index)
    setTodos(remainingTodos)
}

  const completeTodo = (index) => {

    let newTodoList = [...todos]

    if(newTodoList[index].status == false){
      newTodoList[index].status = true
    }else{
      newTodoList[index].status = false
    }
    
    setTodos(newTodoList)
  }

  const timeToMinutes = (time) => {
    const units = {minuter: 1, timmar: 60, dagar: 1440}

    const parts = time.match(/^(\d+)\s(minuter|timmar|dagar)$/)

    if(!parts)
      throw new Error(`'${time}' - Unexpected time format`)
    const scalar = parseInt(parts[1])
    const minutes = units[parts[2]]

    return minutes*scalar
  }

  const sortTodo = (sorting, direction) => {
    if(sorting == "Status"){
      if(direction == "Fallande"){
        const sorted = [...todos].sort((a,b) => a.status - b.status)
        setTodos(sorted)
      } else {
      const sorted = [...todos].sort((a,b) => b.status - a.status)
        setTodos(sorted)
      }
    } else if(sorting == "Deadline"){
        if(direction == "Fallande"){
          const sorted = [...todos].sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
          setTodos(sorted)
        } else {
          const sorted = [...todos].sort((a, b) => new Date(b.deadline) - new Date(a.deadline))
          setTodos(sorted)
      }
    } else if (sorting == "Tidsestimat"){
        if(direction == "Fallande"){
          const sorted = [...todos].sort((a, b) => timeToMinutes(a.timeEstimate) - timeToMinutes(b.timeEstimate))
          setTodos(sorted)
        }else{
          const sorted = [...todos].sort((a, b) => timeToMinutes(b.timeEstimate) - timeToMinutes(a.timeEstimate))
          setTodos(sorted)
      }
    }
  }
  
  return(
    <TodoContext value={{todos, addTodo, show, setShow, completeTodo, removeTodo, sortTodo}}>
      {children}
    </TodoContext>
  )
}

export default TodoProvider