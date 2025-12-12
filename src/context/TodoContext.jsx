import { createContext, useEffect, useState } from "react";

export const TodoContext = createContext()

const TodoProvider = ({children}) => {
  
  const [show, setShow] = useState(false)
  const [showFilterBtn, setShowFilterBtn] = useState(false)

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])

  const[filter, setFilter] = useState("")
  const[whatToFilter, setWhatToFilter] = useState("")

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  const addTodo = (todo) => {
    setTodos([...todos, todo])
  }

  const removeTodo = (id) => {
    const remainingTodos = todos.filter(todo => todo.id !== id)
    setTodos(remainingTodos)
}

  const completeTodo = (todoId) => {

    const foundObject = todos.filter((todo) => todo.id === todoId)
    const placement = todos.indexOf(foundObject[0])
    const newTodoList = [...todos]
    
    if (newTodoList[placement].status === false) {

      newTodoList[placement].status = true

      
    } else if (newTodoList[placement].status === true) {

      newTodoList[placement].status = false
    } 

    setTodos(newTodoList)
  }

  const timeToMinutes = (time) => {
    const units = {minut: 1, minuter: 1, timme: 60, timmar: 60, dag: 1440, dagar: 1440}

    const parts = time.match(/^(\d+)\s(minut|minuter|timme|timmar|dag|dagar)$/)

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
        } else if(direction == "Stigande"){
        const sorted = [...todos].sort((a,b) => b.status - a.status)
          setTodos(sorted)
        }
      } else if(sorting == "Deadline"){
          if(direction == "Fallande"){
            const sorted = [...todos].sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
            setTodos(sorted)
          } else if(direction == "Stigande"){
            const sorted = [...todos].sort((a, b) => new Date(b.deadline) - new Date(a.deadline))
            setTodos(sorted)
          }

    
      }  else if (sorting == "Tidsestimat"){
          if(direction == "Fallande"){
          const sorted = [...todos].sort((a, b) => timeToMinutes(`${a.timeEstimateNumber} ${a.timeEstimateUnit}`) - timeToMinutes(`${b.timeEstimateNumber} ${b.timeEstimateUnit}`))
            setTodos(sorted)
          }else if(direction == "Stigande"){
            const sorted = [...todos].sort((a, b) => timeToMinutes(`${b.timeEstimateNumber} ${b.timeEstimateUnit}`) - timeToMinutes(`${a.timeEstimateNumber} ${a.timeEstimateUnit}`))
            setTodos(sorted)
        
      }
    }
  }

  const filterTodo = (filter, what) => {
    setFilter(filter)
    setWhatToFilter(what)
    setShowFilterBtn(true)
  }

  const editTodo = (todoId, title, description, category, deadline, timeEstimateUnit, timeEstimateNumber) => {
    const editedTodo = todos.map(todo => todo.id === todoId ? {...todo, title, description, category, deadline, timeEstimateNumber, timeEstimateUnit} : todo)

    
    setTodos(editedTodo)
  }
   
  return(
    <TodoContext value={{todos, addTodo, show, setShow, completeTodo, removeTodo, sortTodo, filterTodo, filter, whatToFilter, showFilterBtn, setShowFilterBtn, setFilter, editTodo}}>
      {children}
    </TodoContext>
  )
}

export default TodoProvider