import { createContext, useState } from "react"

export const HabitsContext = createContext()

const HabitsProvider = ({ children }) => {
  const [repetitions, setRepetitions] = useState(0)
  const [habits, setHabits] = useState([
    { title: "läsa", repetitions, priority: "låg" },
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
  const updateArray = (newArray) => {
    console.log("update sees the array as " + JSON.stringify(newArray))
    setHabits(newArray)
  }
  const updateInArray = (placement, change) => {
    const newHabits = [...habits]
    if (change === "increase") {
      ++newHabits[placement].repetitions
    } else if (change === "decrease") {
      --newHabits[placement].repetitions
    } else {
      newHabits[placement].repetitions = 0
    }

    setHabits(newHabits)
  }

  return (
    <HabitsContext
      value={{ habits, showArray, addHabit, updateArray, updateInArray }}
    >
      {children}
    </HabitsContext>
  )
}

export default HabitsProvider
