import { useContext, useState, useEffect } from "react"
import { HabitsContext } from "../../context/HabitsContext"
import { UserContext } from "../../context/UserContext"
import s from "./HabitsPage.module.css"
import HabitsForm from "../../components/HabitsForm.jsx/HabitsForm"

const HabitsPage = () => {
  const { habits, incrDecrReset, deleteHabit } = useContext(HabitsContext)
  const { currentUser } = useContext(UserContext)
  const [addMode, setAddMode] = useState(false)
  //added to communicate with select and set first value = ""
  const [filterClick, setFilterClick] = useState("")
  const [sortClick, setSortClick] = useState("")
  const [display, setDisplay] = useState(habits)

  useEffect(() => {
    if (filterClick && filterClick !== "all") {
      setDisplay(habits.filter((item) => item.priority === filterClick))
    } else {
      setDisplay(habits)
    }
  }, [filterClick])

  useEffect(() => {
    const orderedArr = [...display]
    if (sortClick === "sortincrease") {
      setDisplay(orderedArr.sort((a, b) => a.repetitions - b.repetitions))
    } else if (sortClick === "sortdecrease") {
      setDisplay(orderedArr.sort((a, b) => b.repetitions - a.repetitions))
    }
  }, [sortClick])

  useEffect(() => {
    setDisplay(habits)
  }, [habits])

  return (
    <div className={s.wrapper}>
      <h2 className={s.pagetitle}>Rutiner</h2>
      <div className={s.filtersort}>
        <button
          className={!addMode ? s.newbtn : s.cancelbtn}
          onClick={() => {
            setAddMode(!addMode)
          }}
        >
          {!addMode ? "+" : "x"}
        </button>
        <div className={s.filterdiv}>
          <label htmlFor="filter">Filtrera efter:</label>
          <select
            value={filterClick}
            name="filter"
            id="filter"
            onChange={(e) => {
              setFilterClick(e.target.value)
              // checkFiltering(filterClick)
            }}
          >
            <option value="">Välj prioriteringsnivå...</option>
            <option value="all">Visa alla</option>
            <option value="låg">Låg</option>
            <option value="medel">Medel</option>
            <option value="hög">Hög</option>
          </select>
          <label htmlFor="sort">Sortera efter:</label>
          <select
            value={sortClick}
            name="sort"
            id="sort"
            onChange={(e) => {
              setSortClick(e.target.value)
            }}
          >
            <option value="">Sortera efter...</option>
            <option value="sortincrease">Fallande</option>
            <option value="sortdecrease">Stigande</option>
          </select>
        </div>
      </div>{" "}
      <div className={s.mainflex}>
        <div className={s.newhabit}>{addMode && <HabitsForm />}</div>
        <div className={s.grid}>
          {display
            .filter((habit) => habit.userId === currentUser.userId)
            .map((item, i) => (
              <div className={s.habitCard} key={i}>
                <button
                  className={s.deletebtn}
                  onClick={() => {
                    deleteHabit(item.habitId)
                  }}
                >
                  X
                </button>
                <h2 className={s.cardtitle}>{item.title}</h2>
                <p>
                  <strong>repetitioner:</strong>
                </p>
                <div className={s.repsflex}>
                  <button
                    className={s.repbtn}
                    onClick={() => {
                      incrDecrReset(item.habitId, "decrease")
                    }}
                  >
                    -
                  </button>
                  <p className={s.repsnum}>{item.repetitions}</p>
                  <button
                    className={s.repbtn}
                    onClick={() => {
                      incrDecrReset(item.habitId, "increase")
                    }}
                  >
                    +
                  </button>
                </div>
                <button
                  className={s.resetbtn}
                  onClick={(e) => {
                    incrDecrReset(item.habitId, "reset")
                  }}
                >
                  återställ
                </button>

                <p className={s[item.priority]}>
                  <strong>prioritet:</strong> {item.priority}{" "}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default HabitsPage
