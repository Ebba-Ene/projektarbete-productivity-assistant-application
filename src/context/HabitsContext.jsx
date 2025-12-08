import { createContext, useState } from "react"

export const HabitsContext = createContext()

const HabitsProvider = ({ children }) => {
  const [habits, setHabits] = useState([
    { title: "läsa", repetitions: 2, priority: "låg" },
    { title: "träna", repetitions: 1, priority: "medel" },
    { title: "plugga", repetitions: 5, priority: "hög" },
  ])
  const showArray = (habits) => {
    console.log("showArray function sees habits as: " + JSON.stringify(habits))
  }
  const addHabit = (newHabit) => {
    console.log(JSON.stringify(newHabit))
    setHabits([...habits, newHabit])
  }

  return (
    <HabitsContext value={{ habits, showArray, addHabit }}>
      {children}
    </HabitsContext>
  )
}

export default HabitsProvider
