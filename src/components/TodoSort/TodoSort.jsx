import { useContext, useState } from "react"
import { TodoContext } from "../../context/TodoContext"

const TodoSort = () => {

  const { sortTodo } = useContext(TodoContext)
  const [sort, setSort] = useState("")
  const [direction, setDirection] = useState("")
 
  const handleSubmit = (e) => {
    e.preventDefault()
    sortTodo(sort, direction)
  }

  return(
    <form onSubmit={handleSubmit}>
      <select value={sort} onChange={(e) => {setSort(e.target.value)}}>
        <option value="" disabled>Sortera</option>
        <option>Deadline</option>
        <option>Tidsestimat</option>
        <option>Status</option>
      </select>

    {sort === "Deadline" && 
      <select value={direction} onChange={(e) => {setDirection(e.target.value)}}>
        <option value="" disabled>Välj</option>
        <option value="Fallande">Närmast</option>
        <option value="Stigande">Längs bort</option>
      </select>    
    }

    {sort === "Tidsestimat" && 
      <select value={direction} selected onChange={(e) => {setDirection(e.target.value)}}>
        <option value="" disabled>Välj</option>
        <option value="Fallande">Kortast</option>
        <option value="Stigande">Längst</option>
      </select>    
    }

    {sort === "Status" && 
      <select value={direction} onChange={(e) => {setDirection(e.target.value)}}>
        <option value="" disabled>Välj</option>
        <option value="Fallande">Inte gjort</option>
        <option value="Stigande">Gjort</option>
      </select>    
    }

      <button type="submit">Sortera</button>
    </form>
  )
}

export default TodoSort