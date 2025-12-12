import { createContext, useState } from "react"

export const HabitsContext = createContext()

const HabitsProvider = ({ children }) => {
  const [repetitions, setRepetitions] = useState(0)
  const [habits, setHabits] = useState([
    {
      habitId: crypto.randomUUID(),
      title: "läsa",
      repetitions,
      priority: "låg",
    },
    {
      habitId: crypto.randomUUID(),
      title: "träna",
      repetitions: 1,
      priority: "medel",
    },
    {
      habitId: crypto.randomUUID(),
      title: "plugga",
      repetitions: 5,
      priority: "hög",
    },
    {
      habitId: crypto.randomUUID(),
      title: "sjunga",
      repetitions: 8,
      priority: "låg",
    },
  ])
  const showArray = (habits) => {
    console.log("showArray function sees habits as: " + JSON.stringify(habits))
  }
  const addHabit = (newHabit) => {
    console.log("entered addHabit")
    console.log(JSON.stringify(newHabit))
    setHabits([...habits, newHabit])
  }
  const updateArray = (newArray) => {
    console.log("update sees the array as " + JSON.stringify(newArray))
    setHabits(newArray)
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
      console.log(
        "sees newHabits placement in reset as " +
          newHabits[placement].repetitions
      )
      newHabits[placement].repetitions = 0
    } else {
      alert("Det går inte att göra färre än 0 repetitioner!")
    }
    setHabits(newHabits)
  }

  return (
    <HabitsContext
      value={{
        habits,
        showArray,
        addHabit,
        updateArray,
        incrDecrReset,
      }}
    >
      {children}
    </HabitsContext>
  )
}

export default HabitsProvider
