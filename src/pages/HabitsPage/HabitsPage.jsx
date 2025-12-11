import { useContext, useState, useEffect } from "react"
import { HabitsContext } from "../../context/HabitsContext"
import s from "./HabitsPage.module.css"
import HabitsForm from "../../components/HabitsForm.jsx/HabitsForm"

const HabitsPage = () => {
  const { habits, showArray, updateArray, incrDecrReset } =
    useContext(HabitsContext)
  const [addMode, setAddMode] = useState(false)
  const [filter, setFilter] = useState(null)
  const [sort, setSort] = useState(null)
  const [display, setDisplay] = useState(habits)
  /*   const checkFilterSort = () => {
    if (filter) {
      console.log(`jag ser filter: ${filter}`)
      const newList = habits.filter((item) => item.priority === filter)
      console.log(JSON.stringify(newList))
    }
    console.log("du klickade")
  } */
  const filterClick = (value) => {
    console.log("ändrade sort")
    console.log(value)
    if (value === "låg") {
      setDisplay(habits.filter((item) => item.priority === value))
    } else if (value === "medel") {
      setDisplay(habits.filter((item) => item.priority === value))
    } else if (value === "hög") {
      setDisplay(habits.filter((item) => item.priority === value))
    } else {
      setDisplay(habits)
    }
  }
  const sortClick = (event) => {
    console.log("ändrade sort")
    console.log(event.target.value)
  }

  return (
    <>
      <h2>Habits:</h2>
      {/* {showArray(habits)} */}
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
            filterClick(e.target.value)
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
          name="sort"
          id="sort"
          onChange={(e) => {
            sortClick(e)
          }}
        >
          <option value="">Sortera efter...</option>
          <option value="sortincrease">Fallande</option>
          <option value="sortdecrease">Stigande</option>
        </select>
        <button
          onClick={() => {
            checkFilterSort()
          }}
        >
          Kör {filter} {sort}{" "}
        </button>
      </div>
      <h3>display:</h3>
      <div className={s.grid}>
        {display.map((item, i) => (
          <div className={s.habitCard} key={i}>
            <h2>{item.title}</h2>
            <p>
              <strong>repetitioner:</strong>
            </p>
            <div className={s.reps}>
              <button
                onClick={() => {
                  incrDecrReset(item.habitId, "decrease")
                }}
              >
                -
              </button>
              <p>{item.repetitions}</p>
              <button
                onClick={() => {
                  incrDecrReset(item.habitId, "increase")
                }}
              >
                +
              </button>
            </div>
            <button
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
        <br />
        {
          /* !filter &&
          !sort && */
          habits.map((item, i) => (
            <div className={s.habitCard} key={i}>
              <h2>{item.title}</h2>
              <p>
                <strong>repetitioner:</strong>
              </p>
              <div className={s.reps}>
                <button
                  onClick={() => {
                    incrDecrReset(item.habitId, "decrease")
                  }}
                >
                  -
                </button>
                <p>{item.repetitions}</p>
                <button
                  onClick={() => {
                    incrDecrReset(item.habitId, "increase")
                  }}
                >
                  +
                </button>
              </div>
              <button
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
          ))
        }
      </div>
    </>
  )
}

export default HabitsPage
