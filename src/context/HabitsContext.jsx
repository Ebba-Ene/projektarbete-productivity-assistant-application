import { createContext, useState, useEffect } from "react"

export const HabitsContext = createContext()

const HabitsProvider = ({ children }) => {
  const [habits, setHabits] = useState(
    JSON.parse(localStorage.getItem("habits")) || []
  )

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits))
  }, [habits])

  const addHabit = (newHabit) => {
    setHabits([...habits, newHabit])
  }

  const incrDecrReset = (id, change) => {
    const foundObject = habits.filter((item) => item.habitId === id)
    //indexOf returns array with 1 item if found or -1 if no match
    const placement = habits.indexOf(foundObject[0])
    const newHabits = [...habits]
    if (change === "increase") {
      ++newHabits[placement].repetitions
    } else if (change === "decrease" && newHabits[placement].repetitions > 0) {
      --newHabits[placement].repetitions
    } else if (change === "reset") {
      newHabits[placement].repetitions = 0
    } else {
      alert("Det går inte att göra färre än 0 repetitioner!")
    }
    setHabits(newHabits)
  }

  const deleteHabit = (id) => {
    setHabits(habits.filter((item) => item.habitId !== id))
  }

  return (
    <HabitsContext
      value={{
        habits,
        addHabit,
        incrDecrReset,
        deleteHabit,
      }}
    >
      {children}
    </HabitsContext>
  )
}

export default HabitsProvider
