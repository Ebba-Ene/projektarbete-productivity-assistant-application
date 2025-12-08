import { useContext, useState } from "react"
import { TodoContext } from "../../context/TodoContext"


const TodoForm = () => {

  const {addTodo, show, setShow} = useContext(TodoContext)

  const[title, setTitle] = useState("")
  const[description, setDescription] = useState("")
  const[timeEstimate, setTimeEstimate] = useState("")
  const[category, setCategory] = useState("")
  const[deadline, setDeadline] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if(category !== "Kategori"){
      let newTodo = {
        title,
        description,
        status: false,
        timeEstimate,
        category,
        deadline
      }
      addTodo(newTodo)
      setShow(false)
      
    } else{
      alert("Välj kategori")
      console.log(category)
    }
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Titel" onChange={(e) => {setTitle(e.target.value)}}/>
      <input type="text" placeholder="Beskrivning" onChange={(e) => {setDescription(e.target.value)}}/>
      <input type="text" placeholder="Tidsestimat" onChange={(e) => {setTimeEstimate(e.target.value)}}/>
      <select value={category} onChange={(e) => {setCategory(e.target.value)}}>
        <option>Kategori</option>
        <option>Hälsa</option>
        <option>Hushåll</option>
        <option>Jobbrelaterat</option>
        <option>Nöje</option>
      </select>
      <input type="text" placeholder="Deadline" onChange={(e) => {setDeadline(e.target.value)}}/>

      <button type="submit"> <strong>Lägg till ny todo</strong> {title}</button>
    </form>
  )
}

export default TodoForm