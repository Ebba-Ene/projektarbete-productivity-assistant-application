import { useContext, useState } from "react"
import { HabitsContext } from "../../context/HabitsContext"
import s from "./Habits.module.css"
import HabitsForm from "../../components/HabitsForm.jsx/HabitsForm"

const Habits = () => {
  const { habits, showArray } = useContext(HabitsContext)
  const [addMode, setAddMode] = useState(false)
  return (
    <>
      <h1>Habits:</h1>
      <button
        onClick={() => {
          setAddMode(!addMode)
        }}
      >
        Lägg till ny vana:
      </button>
      {addMode && <HabitsForm />}
      <div className={s.grid}>
        {habits.map((item, i) => (
          <div className={s.habitCard} key={i}>
            <h2>{item.title}</h2>
            <p>
              <strong>repetitioner:</strong> {item.repetitions}
            </p>
            <p>
              <strong>prioritet:</strong> {item.priority}{" "}
            </p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Habits
