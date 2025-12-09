import { useContext, useState } from "react"
import { TodoContext } from "../../context/TodoContext"

import todoCss from "./TodoForm.module.css"

const TodoForm = () => {

  const {addTodo, setShow} = useContext(TodoContext)

  const[title, setTitle] = useState("")
  const[description, setDescription] = useState("")
  const[timeEstimate, setTimeEstimate] = useState("")
  const[timeEstimateNumber, setTimeEstimateNumber] = useState(0)

  const[category, setCategory] = useState("")
  const[deadline, setDeadline] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if(category){
      let newTodo = {
        title,
        description,
        status: false,
        timeEstimate,
        timeEstimateNumber,
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
    <form onSubmit={handleSubmit} className={todoCss.form}>
      <input type="text" placeholder="Titel" onChange={(e) => {setTitle(e.target.value)}}/>
      <input type="text" placeholder="Beskrivning" onChange={(e) => {setDescription(e.target.value)}}/>
      <input type="number" placeholder="Tidsestimat?" onChange={(e) => {setTimeEstimateNumber(e.target.value)}}/>
      <select value={timeEstimate} onChange={(e) => {setTimeEstimate(e.target.value)}}>
        <option value="" disabled>Tidsform</option>
        <option>minuter</option>
        <option>timmar</option>
        <option>dagar</option>
      </select>
      <select value={category} onChange={(e) => {setCategory(e.target.value)}}>
        <option value="" disabled>Kategori</option>
        <option>Hälsa</option>
        <option>Hushåll</option>
        <option>Jobbrelaterat</option>
        <option>Nöje</option>
      </select>
      {/* <input type="text" placeholder="Deadline" onChange={(e) => {setDeadline(e.target.value)}}/> */}
      <input type="datetime-local"/>

      <button type="submit"> <strong>Lägg till ny todo</strong> {title}</button>
    </form>
  )
}

export default TodoForm