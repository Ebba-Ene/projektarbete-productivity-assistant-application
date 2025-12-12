import { useContext, useState, useEffect } from "react"
import { HabitsContext } from "../../context/HabitsContext"
import s from "./HabitsPage.module.css"
import HabitsForm from "../../components/HabitsForm.jsx/HabitsForm"

const HabitsPage = () => {
  const { habits, incrDecrReset } = useContext(HabitsContext)
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
  }, [filterClick, habits])

  useEffect(() => {
    /* setFilterClick("all") */
    const orderedArr = [...display]
    if (sortClick === "sortincrease") {
      setDisplay(orderedArr.sort((a, b) => a.repetitions - b.repetitions))
    } else if (sortClick === "sortdecrease") {
      setDisplay(orderedArr.sort((a, b) => b.repetitions - a.repetitions))
    }
  }, [sortClick, habits])

  return (
    <div className={s.wrapper}>
      <h2 className={s.pagetitle}>Rutiner</h2>
      <div className={s.filtersort}>
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
      </div>{" "}
      <div className={s.newhabit}>
        <button
          className={!addMode ? s.newbtn : s.cancelbtn}
          onClick={() => {
            setAddMode(!addMode)
          }}
        >
          {!addMode ? "+" : "Avbryt"}
        </button>
        {addMode && <HabitsForm />}
      </div>
      <div className={s.grid}>
        {display.map((item, i) => (
          <div className={s.habitCard} key={i}>
            <h2>{item.title}</h2>
            <p>
              <strong>repetitioner:</strong>
            </p>
            <div className={s.reps}>
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

            <p>
              <strong>prioritet:</strong> {item.priority}{" "}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HabitsPage
