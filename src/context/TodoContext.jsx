import { createContext, useState } from "react";

export const TodoContext = createContext()

const TodoProvider = ({children}) => {

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
  },
])
  
  return(
    <TodoContext value={{todos}}>
      {children}
    </TodoContext>
  )
}

export default TodoProvider