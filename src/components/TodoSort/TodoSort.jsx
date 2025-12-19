import { useContext, useState } from "react"
import { TodoContext } from "../../context/TodoContext"

import todoCss from "./TodoSort.module.css"


const TodoSort = () => {

  const { sortTodo, setSort } = useContext(TodoContext)
  const [sorting, setSorting] = useState("")
  const [direction, setDirection] = useState("")
 
  const handleSubmit = (e) => {
    e.preventDefault()
    sortTodo(sorting, direction)
  }

  const stopSorting = () => {
    setSorting("")
    setDirection("")
    setSort("")
  }

  return(
    <form onSubmit={handleSubmit} className={todoCss.form}>
      <select value={sorting} onChange={(e) => {setSorting(e.target.value)}}>
        <option value="" disabled>Sortera</option>
        <option>Deadline</option>
        <option>Tidsestimat</option>
        <option>Status</option>
      </select>

    {sorting === "Deadline" && 
      <select value={direction} onChange={(e) => {setDirection(e.target.value)}}>
        <option value="" disabled>Välj</option>
        <option value="Fallande">Närmast</option>
        <option value="Stigande">Längs bort</option>
      </select>    
    }

    {sorting === "Tidsestimat" && 
      <select value={direction} onChange={(e) => {setDirection(e.target.value)}}>
        <option value="" disabled>Välj</option>
        <option value="Fallande">Kortast</option>
        <option value="Stigande">Längst</option>
      </select>    
    }

    {sorting === "Status" && 
      <select value={direction} onChange={(e) => {setDirection(e.target.value)}}>
        <option value="" disabled>Välj</option>
        <option value="Fallande">Inte gjort</option>
        <option value="Stigande">Gjort</option>
      </select>    
    }

      <button type="submit" className={todoCss.sorting}>Sortera</button>

    {sorting !== "" &&
      <button type="button" onClick={stopSorting} className={todoCss.stopSorting} >Sluta sortera</button>
    }

    </form>
  )
}

export default TodoSort