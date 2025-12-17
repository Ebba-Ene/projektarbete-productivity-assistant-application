import { createContext, useEffect, useState } from "react";

export const TodoContext = createContext()

const TodoProvider = ({children}) => {
  
  const [show, setShow] = useState(false)

  const[filter, setFilter] = useState("")
  const[whatToFilter, setWhatToFilter] = useState("")
  
  const[sort, setSort] = useState("")
  const[howToSort, setHowToSort] = useState("")
  
  const [todoId, setTodoId] = useState(JSON.parse(localStorage.getItem("todoIdCounter")) || 0)
  
  useEffect(() => {
    localStorage.setItem("todoIdCounter", JSON.stringify(todoId))
  }, [todoId])

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  const addTodo = (userId, title, description, timeEstimateUnit, timeEstimateNumber, category, deadline) => {

    let newTodo = {
      title,
      userId,
      todoId,
      description,
      status: false,
      timeEstimateUnit, 
      timeEstimateNumber: Number(timeEstimateNumber),
      category,
      deadline
    }
      
    setTodos([...todos, newTodo])
  
    setTodoId(todoId + 1)
  }

  const removeTodo = (id) => {
    const remainingTodos = todos.filter(todo => todo.id !== id)
    setTodos(remainingTodos)
}

  const completeTodo = (id) => {

    const foundObject = todos.filter((todo) => todo.id === id)
    const placement = todos.indexOf(foundObject[0])
    const newTodoList = [...todos]
    
    if (newTodoList[placement].status === false) {

      newTodoList[placement].status = true
 
    } else if (newTodoList[placement].status === true) {

      newTodoList[placement].status = false
    } 

    setTodos(newTodoList)
  }

  const sortTodo = (sorting, direction) => {
    setSort(sorting)
    setHowToSort(direction)
  }

  const filterTodo = (filter, what) => {
    setFilter(filter)
    setWhatToFilter(what)
  }

  const editTodo = (id, title, description, category, deadline, timeEstimateUnit, timeEstimateNumber) => {
    const editedTodo = todos.map(todo => todo.id === id 
      ? {...todo, title, description, category, deadline, timeEstimateNumber, timeEstimateUnit} 
      : todo
    )

    setTodos(editedTodo)
  }
   
  return(
    <TodoContext value={{
      todos, 
      addTodo, 
      show, 
      setShow, 
      completeTodo, 
      removeTodo, 
      editTodo,

      filterTodo, 
      setFilter, 
      filter, 
      whatToFilter, 

      sortTodo, 
      setSort,
      sort,
      howToSort
    }}>
      {children}
    </TodoContext>
  )
}

export default TodoProvider