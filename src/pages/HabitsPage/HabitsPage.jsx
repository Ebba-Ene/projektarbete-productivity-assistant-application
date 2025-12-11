import { useContext, useState, useEffect } from "react"
import { HabitsContext } from "../../context/HabitsContext"
import s from "./HabitsPage.module.css"
import HabitsForm from "../../components/HabitsForm.jsx/HabitsForm"

const HabitsPage = () => {
  const { habits, showArray, updateArray, updateInArray, incrAndDecr } =
    useContext(HabitsContext)
  const [addMode, setAddMode] = useState(false)
  const [filter, setFilter] = useState(null)
  const [sort, setSort] = useState(null)
  const checkFilterSort = () => {
    if (filter) {
      console.log(`jag ser filter: ${filter}`)
      const newList = habits.filter((item) => item.priority === filter)
      console.log(JSON.stringify(newList))
    }
    console.log("du klickade")
  }

  return (
    <>
      <h2>Habits:</h2>
      {showArray(habits)}
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
          name="filter"
          id="filter"
          onChange={(e) => {
            setFilter(e.target.value)
          }}
        >
          <option value="">Välj prioriteringsnivå...</option>
          <option value="låg">Låg</option>
          <option value="medel">Medel</option>
          <option value="hög">Hög</option>
        </select>
        <select
          name="sort"
          id="sort"
          onChange={(e) => {
            setSort(e.target.value)
          }}
        >
          <option value="">Sortera efter...</option>
          <option value="incr">Fallande</option>
          <option value="decr">Stigande</option>
        </select>
        <button
          onClick={() => {
            checkFilterSort()
          }}
        >
          Kör {filter} {sort}{" "}
        </button>
      </div>
      <div className={s.grid}>
        {!filter &&
          !sort &&
          habits.map((item, i) => (
            <div className={s.habitCard} key={i}>
              <h2>{item.title}</h2>
              <p>
                <strong>repetitioner:</strong>
              </p>
              <div className={s.reps}>
                <button
                  onClick={(e) => {
                    incrAndDecr(item.habitId, "decrease")
                  }}
                >
                  -
                </button>
                <p>{item.repetitions}</p>
                <button
                  onClick={(e) => {
                    incrAndDecr(item.habitId, "increase")
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
