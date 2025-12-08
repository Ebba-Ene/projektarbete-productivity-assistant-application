import { useContext } from "react"
import { HabitsContext } from "../../context/HabitsContext"

const Habits = () => {
  const { habits, showArray } = useContext(HabitsContext)
  return (
    <>
      <h1>Habits component</h1>
      {showArray(habits)}
    </>
  )
}

export default Habits
