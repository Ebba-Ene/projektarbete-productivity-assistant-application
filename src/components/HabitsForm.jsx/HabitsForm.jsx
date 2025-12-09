import { useState, useContext } from "react"
import { HabitsContext } from "../../context/HabitsContext"
import s from "./HabitsForm.module.css"

const HabitsForm = () => {
  const { addHabit } = useContext(HabitsContext)
  const [priority, setPriority] = useState(null)
  const [reps, setReps] = useState(null)
  const [title, setTitle] = useState(null)
  const [isError, setIsError] = useState(null)

  const checkInput = () => {
    priority
    if (!title || !reps || !priority) {
      setIsError(true)
    } else if (title && reps && priority) {
      const newHabit = {
        title,
        repetitions: +reps,
        priority,
      }
      setIsError(false)
      addHabit(newHabit)
    }
  }

  return (
    <div className={s.habitsform}>
      <h1>HabitsForm component</h1>
      <h2>Skapa upp en ny vana:</h2>
      <label htmlFor="title">Titel:</label>
      <input
        type="text"
        name="title"
        id="title"
        onChange={(e) => {
          setTitle(e.target.value)
        }}
      />
      <label htmlFor="repetitions">Repetitioner:</label>
      <input
        type="number"
        name="repetitions"
        id="repetitions"
        onChange={(e) => {
          setReps(e.target.value)
        }}
      />
      <label htmlFor="priority">Prioriteringsnivå:</label>
      <select
        name="priority"
        id="priority"
        onChange={(e) => setPriority(e.target.value)}
      >
        Välj prioritet
        <option value="">Välj prioriteringsnivå</option>
        <option value="låg">Låg</option>
        <option value="medel">Medel</option>
        <option value="hög">Hög</option>
      </select>
      <button
        onClick={() => {
          checkInput()
        }}
      >
        Lägg till vana
      </button>
      {isError && (
        <p>
          Se till att fylla ut <strong>all information</strong> innan du skapar
          en ny vana!
        </p>
      )}
    </div>
  )
}
export default HabitsForm
