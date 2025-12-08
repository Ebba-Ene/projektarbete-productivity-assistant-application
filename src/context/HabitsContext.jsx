import { createContext, useState } from "react"

export const HabitsContext = createContext()

const HabitsProvider = ({ children }) => {
  const [habits, setHabits] = useState([
    { title: "read", repetitions: 2, priority: "low" },
  ])
  const showArray = (habits) => {
    console.log("showArray function sees habits as: " + JSON.stringify(habits))
  }

  return <HabitsContext value={{ habits, showArray }}>{children}</HabitsContext>
}

export default HabitsProvider
