import { useContext, useState } from "react"
import { TodoContext } from "../../context/TodoContext"

const TodoSort = () => {

  const { sortTodo } = useContext(TodoContext)
  const [sort, setSort] = useState("")
  const [direction, setDirection] = useState("Stigande")
 
  const handleSubmit = () => {
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

      <select value={direction} onChange={(e) => {setDirection(e.target.value)}}>
        <option>Stigande</option>
        <option>Fallande</option>
      </select>

      <button type="submit">Sortera</button>
    </form>
  )
}

export default TodoSort