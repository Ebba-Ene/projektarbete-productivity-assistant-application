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
  const [display, setDisplay] = useState([])

  /* Old code for useffect */
  /*   useEffect(() => {
    if (filterClick && filterClick !== "all") {
      setDisplay(habits.filter((item) => item.priority === filterClick))
    } else {
      setDisplay(habits)
    }
  }, [filterClick, habits])

  useEffect(() => {
    setSortClick("")
  }, [filterClick])

  useEffect(() => {
    const sortArray = [...display]
    if (sortClick === "sortincrease") {
      setDisplay(sortArray.sort((a, b) => a.repetitions - b.repetitions))
    } else if (sortClick === "sortdecrease") {
      setDisplay(sortArray.sort((a, b) => b.repetitions - a.repetitions))
    }
  }, [sortClick, habits]) */

  useEffect(() => {
    console.log("useffect from latest try is running")
    const currentHabits = [...habits]
    let result = []
    if (filterClick && filterClick !== "all") {
      console.log("in if statement for filter")
      result = currentHabits.filter((item) => item.priority === filterClick)
    } else {
      result = currentHabits
    }
    if (sortClick === "sortincrease") {
      result = result.sort((a, b) => a.repetitions - b.repetitions)
    } else if (sortClick === "sortdecrease") {
      result = result.sort((a, b) => b.repetitions - a.repetitions)
    }
    setDisplay(result)
  }, [filterClick, sortClick, habits])

  const resetChoices = () => {
    setFilterClick("")
    setSortClick("")
  }
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
            <option value="sortincrease">Stigande</option>
            <option value="sortdecrease">Fallande</option>
          </select>
        </div>
      </div>
      <div className={s.mainflex}>
        <div className={s.newhabit}>
          {addMode && <HabitsForm resetChoices={resetChoices} />}
        </div>
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
                <p className={s.reptitle}>Repetitioner:</p>
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
                  Återställ
                </button>
                {/*To create module.css className based on value in item.priority */}
                <p className={s[item.priority]}>
                  <strong>Prioritet:</strong> {item.priority}{" "}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default HabitsPage
