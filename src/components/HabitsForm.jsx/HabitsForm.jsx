import { useState, useContext } from "react"
import { HabitsContext } from "../../context/HabitsContext"
import s from "./HabitsForm.module.css"

const HabitsForm = () => {
  const { addHabit } = useContext(HabitsContext)
  const [priority, setPriority] = useState(null)
  const [reps, setReps] = useState(null)
  const [title, setTitle] = useState(null)
  const [isError, setIsError] = useState(null)
  const [typeError, setTypeError] = useState(null)

  const checkInput = () => {
    priority
    if (!title || !reps || !priority) {
      alert(
        "Var vänlig fyll i alla rutor med information innan du skapar en ny vana!"
      )
    } else if (reps < 0) {
      alert(
        "Antalet genomförda repetitioner kan inte vara färre än noll gånger!"
      )
    } else if (title && reps && priority) {
      const newHabit = {
        habitId: crypto.randomUUID(),
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
      <h2 className={s.titleForm}>Skapa upp en ny vana:</h2>
      <label htmlFor="title">Titel:</label>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Lägg till en rubrik"
        onChange={(e) => {
          setTitle(e.target.value)
        }}
      />
      <label htmlFor="repetitions">Repetitioner:</label>
      <input
        type="number"
        name="repetitions"
        id="repetitions"
        placeholder="antal utförda repetitioner"
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
    </div>
  )
}
export default HabitsForm
