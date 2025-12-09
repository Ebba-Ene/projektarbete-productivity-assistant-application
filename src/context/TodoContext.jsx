import { createContext, useState } from "react";

export const TodoContext = createContext()

const TodoProvider = ({children}) => {
  
  const[show, setShow] = useState(false)

  const [todos, setTodos] = useState([{ //Kommer vara tom, objektet finns bara för att testa
    title: "Städa",
    description: "Damma",
    status: false,
    timeEstimate: "3 timmar",
    category: "Hushåll",
    deadline: "9 december"
  },{ //Kommer vara tom, objektet finns bara för att testa
    title: "Träna",
    description: "Styrketräning",
    status: true,
    timeEstimate: "40min",
    category: "Hälsa",
    deadline: "10 december"
  }, { //Kommer vara tom, objektet finns bara för att testa
    title: "Städa",
    description: "Tvätta",
    status: false,
    timeEstimate: "3 timmar",
    category: "Hushåll",
    deadline: "9 december"
  }
])

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
  
  return(
    <TodoContext value={{todos, addTodo, show, setShow, completeTodo, removeTodo}}>
      {children}
    </TodoContext>
  )
}

export default TodoProvider