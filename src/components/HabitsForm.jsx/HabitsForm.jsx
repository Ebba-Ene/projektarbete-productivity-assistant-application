import { useState, useContext } from "react"
import { HabitsContext } from "../../context/HabitsContext"
import s from "./HabitsForm.module.css"
import { UserContext } from "../../context/UserContext"

const HabitsForm = () => {
  const { currentUser } = useContext(UserContext)
  const { addHabit } = useContext(HabitsContext)

  const [priority, setPriority] = useState(null)
  const [reps, setReps] = useState(null)
  const [title, setTitle] = useState(null)
  /*     const [isError, setIsError] = useState(null)
  const [typeError, setTypeError] = useState(null) */

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
        userId: currentUser.userId,
        habitId: crypto.randomUUID(),
        title,
        repetitions: +reps,
        priority,
      }

      addHabit(newHabit)
    }
  }

  return (
    <div className={s.habitscomponent}>
      <div className={s.habitsform}>
        <h2 className={s.titleform}>Ny rutin</h2>
        <label htmlFor="title">Titel:</label>
        <input
          className={s.titleinput}
          type="text"
          name="title"
          id="title"
          placeholder="Lägg till en titel"
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <label htmlFor="repetitions">Repetitioner:</label>
        <input
          className={s.repsinput}
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
          className={s.priorityinput}
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
          className={s.formbtn}
          onClick={() => {
            checkInput()
          }}
        >
          Lägg till
        </button>
      </div>
    </div>
  )
}
export default HabitsForm
