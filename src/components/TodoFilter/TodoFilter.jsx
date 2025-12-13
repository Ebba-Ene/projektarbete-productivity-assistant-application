import { useContext, useState } from "react"
import { TodoContext } from "../../context/TodoContext"

const TodoFilter = () => {

  const { filterTodo, setFilter} = useContext(TodoContext)

  const[filters, setFilters] = useState("")
  const[category, setCategory] = useState("")
  const[done, setDone] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if(category !== ""){
      filterTodo(filters, category)
    }else{
      filterTodo(filters, done)
    }
  }

  const stopFilter = () => {
    setFilters("")
    setCategory("")
    setDone("")
    setFilter("")
  }

  return(
    <form onSubmit={handleSubmit}>
      <select value={filters} onChange={(e) => {setFilters(e.target.value)}}>
        <option value="" disabled>Filtrera</option>
        <option>Status</option>
        <option>Kategori</option>
      </select>

      {filters == "Kategori" &&
        <select value={category} onChange={(e) => {setCategory(e.target.value)}}>
          <option value="" disabled>Välj</option>
          <option>Hälsa</option>
          <option>Hushåll</option>
          <option>Jobbrelaterat</option>
          <option>Nöje</option>
        </select>
      }

      {filters == "Status" &&
        <select value={done} onChange={(e) => {setDone(e.target.value)}}>
          <option value="" disabled>Välj</option>
          <option>Utförd</option>
          <option>Ej utförd</option>
        </select>
      }
        
      <button type="submit">Filtrera</button>

      {filters !== "" && 
        <button onClick={stopFilter}>Sluta filtrera</button>
      }
    </form>
  )
}

export default TodoFilter