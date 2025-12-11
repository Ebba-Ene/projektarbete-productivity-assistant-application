import { useContext, useState, useEffect } from "react"
import { HabitsContext } from "../../context/HabitsContext"
import s from "./HabitsPage.module.css"
import HabitsForm from "../../components/HabitsForm.jsx/HabitsForm"

const HabitsPage = () => {
  const { habits, showArray, updateArray, updateInArray } =
    useContext(HabitsContext)
  const [addMode, setAddMode] = useState(false)
  const [filter, setFilter] = useState(null)
  const [sort, setSort] = useState(null)

  return (
    <>
      <h2>Habits:</h2>
      <button
        onClick={() => {
          setAddMode(!addMode)
        }}
      >
        {!addMode ? "Lägg till" : "Ignorera"} ny vana
      </button>
      {addMode && <HabitsForm />}
      <div className={s.filtersort}>
        <label htmlFor="filter">Filtrera efter:</label>
        <select
          name=""
          id="filter"
          onChange={(e) => {
            setFilter(e.target.value)
          }}
        >
          <option value="">Välj prioriteringsnivå...</option>
          <option value="low">Låg</option>
          <option value="medium">Medel</option>
          <option value="high">Hög</option>
        </select>
        <select
          name=""
          id="sort"
          onChange={(event) => setSort(event.target.value)}
        >
          <option value="">Sortera efter...</option>
          <option value="dec">Fallande</option>
          <option value="inc">Stigande</option>
        </select>
        <button>
          Kör {filter} {sort}
        </button>
      </div>
      <div className={s.grid}>
        {habits.map((item, i) => (
          <div className={s.habitCard} key={i}>
            <h2>{item.title}</h2>
            <p>
              <strong>repetitioner:</strong>
            </p>
            <div className={s.reps}>
              <button
                onClick={(e) => {
                  updateInArray(i, "decrease")
                }}
              >
                -
              </button>
              <p>{item.repetitions}</p>
              <button
                onClick={(e) => {
                  updateInArray(i, "increase")
                }}
              >
                +
              </button>
            </div>
            <button
              onClick={(e) => {
                updateInArray(i, "reset")
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
    </>
  )
}

export default HabitsPage
