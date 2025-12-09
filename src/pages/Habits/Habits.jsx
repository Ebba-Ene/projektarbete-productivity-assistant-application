import { useContext, useState, useEffect } from "react"
import { HabitsContext } from "../../context/HabitsContext"
import s from "./Habits.module.css"
import HabitsForm from "../../components/HabitsForm.jsx/HabitsForm"

const Habits = () => {
  const { habits, showArray, updateArray } = useContext(HabitsContext)
  const [addMode, setAddMode] = useState(false)
  /* useEffect() */

  return (
    <>
      <h1>Habits:</h1>
      <button
        onClick={() => {
          setAddMode(!addMode)
        }}
      >
        {!addMode ? "Lägg till" : "Ignorera"} ny vana
      </button>
      {addMode && <HabitsForm />}
      <div className={s.grid}>
        {habits.map((item, i) => (
          <div className={s.habitCard} key={i}>
            <h2>{item.title}</h2>
            <div>
              <p>
                <strong>repetitioner:</strong> {item.repetitions}
              </p>
              <button
                onClick={(e) => {
                  console.log(item.repetitions)
                  ++item.repetitions
                  console.log(
                    "nu ses habits array som " + JSON.stringify(habits)
                  )
                  updateArray(habits)
                }}
              >
                +
              </button>
              <button>-</button>
            </div>

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
