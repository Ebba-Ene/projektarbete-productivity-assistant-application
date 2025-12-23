import { useState, useContext, useEffect } from "react"
import { HabitsContext } from "../../context/HabitsContext"
import s from "./HabitsForm.module.css"
import { UserContext } from "../../context/UserContext"

const HabitsForm = ({ resetChoices }) => {
  const { currentUser } = useContext(UserContext)
  const { addHabit } = useContext(HabitsContext)

  const [habitId, setHabitId] = useState(
    JSON.parse(localStorage.getItem("habitIdCounter")) || 0
  )

  useEffect(() => {
    localStorage.setItem("habitIdCounter", JSON.stringify(habitId))
  }, [habitId])

  const [priority, setPriority] = useState("")
  const [reps, setReps] = useState(0)
  const [title, setTitle] = useState("")

  const checkInput = () => {
    priority
    if (title === "" || priority === "") {
      alert(
        "Var vänlig fyll i alla rutor med information innan du skapar en ny vana!"
      )
    } else if (reps < 0) {
      alert(
        "Antalet genomförda repetitioner kan inte vara färre än noll gånger!"
      )
    } else if (title !== "" && priority !== "") {
      const newHabit = {
        userId: currentUser.userId,
        habitId: habitId,
        title,
        repetitions: +reps,
        priority,
      }
      addHabit(newHabit)
      setHabitId(habitId + 1)
      setTitle("")
      setPriority("")
      setReps(0)
    }
  }

  return (
    <div className={s.habitscomponent}>
      <form onSubmit={(e) => e.preventDefault()} className={s.habitsform}>
        <h2 className={s.titleform}>Skapa rutin</h2>
        <label htmlFor="title">Titel:</label>
        <input
          value={title}
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
          //to show placeholder until reps has been set with number
          value={reps || ""}
          className={s.repsinput}
          type="number"
          name="repetitions"
          id="repetitions"
          placeholder="Ange antal"
          onChange={(e) => {
            setReps(e.target.value)
          }}
        />
        <label htmlFor="priority">Prioriteringsnivå:</label>
        <select
          value={priority}
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
            resetChoices()
          }}
        >
          Lägg till
        </button>
      </form>
    </div>
  )
}
export default HabitsForm
