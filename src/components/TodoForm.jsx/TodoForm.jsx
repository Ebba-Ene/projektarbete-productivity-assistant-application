import { useContext, useEffect, useState } from "react"
import { TodoContext } from "../../context/TodoContext"

import todoCss from "./TodoForm.module.css"
import { UserContext } from "../../context/UserContext"

const TodoForm = ({todoId, editedTitle, editedCategory, editedDescription, editedTimeEstimateUnit, editedTimeEstimateNumber, editedDeadline, editingTodo, setEditingTodo}) => {

  const {addTodo, editTodo} = useContext(TodoContext)
  const {currentUser} = useContext(UserContext)

  let userId = currentUser.userId

  const now = new Date()

  const[title, setTitle] = useState(editedTitle || "")
  const[description, setDescription] = useState(editedDescription || "")
  
  const[category, setCategory] = useState(editedCategory || "")
  
  const[timeEstimateUnit, setTimeEstimateUnit] = useState(editedTimeEstimateUnit || "")
  const[timeEstimateNumber, setTimeEstimateNumber] = useState(editedTimeEstimateNumber || "")
  
  const formatDateTimeLocal = () => {
    const d = new Date()
    const pad = (v) => v.toString().padStart(2, "0")
    const year = d.getFullYear()
    const month = pad(d.getMonth() + 1)
    const day = pad(d.getDate())
    return `${year}-${month}-${day}`
  }
  
  const[deadline, setDeadline] = useState(editedDeadline || formatDateTimeLocal(now))
  
  const handleSubmit = () => {
    
    if(category && title && timeEstimateUnit && timeEstimateNumber > 0 && deadline && description){
      
      if(editingTodo){
        editTodo(todoId, title, description, category, deadline, timeEstimateUnit, timeEstimateNumber)
        setEditingTodo(false)
      } else {
        addTodo(userId, title, description, timeEstimateUnit, timeEstimateNumber, category, deadline)
        setTitle("")
        setDescription("")
        setTimeEstimateNumber("")
        setTimeEstimateUnit("")
        setCategory("")
        setDeadline("")
      }

    } else{alert("Fyll i alla tomma fält")}
  }

//resetar värderna till de tidigare om man inte vill ändra längre
  const stop = () => {
    if(editingTodo){
      setTitle(editedTitle)
      setDescription(editedDescription)
      setCategory(editedCategory)
      setDeadline(editedDeadline)
      setTimeEstimateUnit(editedTimeEstimateUnit)
      setTimeEstimateNumber(editedTimeEstimateNumber)
      setEditingTodo(false)
    } else {
        setTitle("")
        setDescription("")
        setTimeEstimateNumber("")
        setTimeEstimateUnit("")
        setCategory("")
        setDeadline("")
    }
  }

  return(
  
    <form className={editingTodo ? todoCss.editForm : todoCss.form } onSubmit={(e) => {
      e.preventDefault()
      handleSubmit()
      }}>
      {editingTodo ? "" : <h3>Skapa ärende</h3> }
      <input 
        type="text" 
        value={title} 
        placeholder="Titel" 
        onChange={(e) => {setTitle(e.target.value)}}
      />

      <select value={category} onChange={(e) => {setCategory(e.target.value)}}>
        <option value="" disabled>Kategori</option>
        <option>Hälsa</option>
        <option>Hushåll</option>
        <option>Jobbrelaterat</option>
        <option>Nöje</option>
      </select>

      <input 
        type="text" 
        value={description} 
        placeholder="Beskrivning" 
        onChange={(e) => {setDescription(e.target.value)}}
      />
      
      <div className={todoCss.timeEstimateDiv}>
        <input 
          type="number" 
          value={editingTodo ? timeEstimateNumber : timeEstimateNumber || ""} 
          placeholder="Tidsestimat?" 
          onChange={(e) => {setTimeEstimateNumber(e.target.value)}}
          />

          {timeEstimateNumber !== 1 && 
            <select value={timeEstimateUnit} onChange={(e) => {setTimeEstimateUnit(e.target.value)}}>
              <option value="" disabled>Tidsform</option>
              <option>minuter</option>
              <option>timmar</option>
              <option>dagar</option>
            </select>
          }
    
          {timeEstimateNumber == 1 && 
            <select value={timeEstimateUnit} onChange={(e) => {setTimeEstimateUnit(e.target.value)}}>
              <option value="" disabled>Tidsform</option>
              <option>minut</option>
              <option>timme</option>
              <option>dag</option>
            </select>
          }
      </div>

      <input type="date" value={deadline} min={formatDateTimeLocal(now)} onChange={(e) => setDeadline(e.target.value)}/>

      <div className={editingTodo ? todoCss.editBtns : todoCss.createBtns}>
        <button type="submit">{editingTodo ? "Spara" : "Lägg till"}</button> 
        {editingTodo ? <button type="button" onClick={() => {stop()}}>Ångra</button> : null }
      </div> 
    </form>
  )
}

export default TodoForm