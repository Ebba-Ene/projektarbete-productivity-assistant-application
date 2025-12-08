import { useContext } from "react"
import { HabitsContext } from "../../context/HabitsContext"
import s from "./Habits.module.css"

const Habits = () => {
  const { habits, showArray } = useContext(HabitsContext)
  return (
    <>
      <h1>Habits:</h1>
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
