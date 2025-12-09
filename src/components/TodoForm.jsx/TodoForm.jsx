import { useContext, useEffect, useState } from "react"
import { TodoContext } from "../../context/TodoContext"

import todoCss from "./TodoForm.module.css"

const TodoForm = () => {

  const {addTodo, setShow} = useContext(TodoContext)
  const now = new Date()

  const[title, setTitle] = useState("")
  const[description, setDescription] = useState("")
  const[timeEstimate, setTimeEstimate] = useState("")
  
  const[category, setCategory] = useState("")
  const[deadline, setDeadline] = useState("")
  
  const[timeEstimateUnit, setTimeEstimateUnit] = useState("")
  const[timeEstimateNumber, setTimeEstimateNumber] = useState(0)
  
    useEffect(() => {
      const newTimeEstimate = `${timeEstimateNumber} ${timeEstimateUnit}`
      setTimeEstimate(newTimeEstimate)
    }, [timeEstimateNumber, timeEstimateUnit])

  const formatDateTimeLocal = () => {
  const d = new Date()
  const pad = (v) => v.toString().padStart(2, "0")
  const year = d.getFullYear()
  const month = pad(d.getMonth() + 1)
  const day = pad(d.getDate())
  return `${year}-${month}-${day}`
};

  const handleSubmit = (e) => {
    e.preventDefault()

    if(category && title && timeEstimate && Number(timeEstimateNumber) !== 0 && deadline && description){
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
    } else{alert("Fyll i alla tomma fält")}
  }

  return(
    <form onSubmit={handleSubmit} className={todoCss.form}>
      <input type="text" placeholder="Titel" onChange={(e) => {setTitle(e.target.value)}}/>
      <input type="text" placeholder="Beskrivning" onChange={(e) => {setDescription(e.target.value)}}/>
      <input type="number" placeholder="Tidsestimat?" onChange={(e) => {setTimeEstimateNumber(Number(e.target.value))}}/>
      
      <select value={timeEstimateUnit} onChange={(e) => {setTimeEstimateUnit(e.target.value)}}>
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
      <input type="date" min={formatDateTimeLocal(now)} onChange={(e) => setDeadline(e.target.value)}/>

      <button type="submit"> <strong>Lägg till ny todo</strong> {title}</button>
    </form>
  )
}

export default TodoForm