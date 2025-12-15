import { useContext } from "react"
import { EventContext } from "../../context/EventContext"
import { formatDisplayDate } from "../../components/helper"
import { Link } from "react-router-dom"
import s from "./HomePage.module.css"
import { TodoContext } from "../../context/TodoContext"
import { HabitsContext } from "../../context/HabitsContext"
import Quote from "../../components/Quote/Quote"
import { UserContext } from "../../context/UserContext"

const HomePage = () => {
  const { upcomingEvents } = useContext(EventContext)
  const { todos } = useContext(TodoContext)
  const { habits } = useContext(HabitsContext)
  const { currentUser } = useContext(UserContext)

  return (
    <>
      <Quote />

      <div className={s.homecontainer}>
        <div className={s.homeitem}>
          <h3>Senaste ej utförda ärenden</h3>
          <ul>
            {todos
              .filter((todo) => todo.userId === currentUser.userId)
              .filter((todo) => todo.status === false)
              .slice(-3)
              .map((todo, key) => (
                <li key={key}>
                  <h3>{todo.title}</h3>
                  <p>{todo.category}</p>
                  <p>{todo.description}</p>
                  <p>
                    {todo.timeEstimateNumber} {todo.timeEstimate}
                  </p>
                  <p>{todo.deadline}</p>
                </li>
              ))}
          </ul>
          <Link to="/todo">→ Alla ärenden</Link>
        </div>

        <div className={s.homeitem}>
          <h3>Rutiner med högst antal repetitioner</h3>
          <ul>
            {habits.length > 0 &&
              habits
                .sort((a, b) => b.repetitions - a.repetitions)
                .slice(0, 3)
                .map((item, i) => (
                  <li key={i}>
                    <p className={s.name}>{item.title}</p>
                    <p>
                      <i>repetitioner: </i>
                      {item.repetitions}
                    </p>
                  </li>
                ))}
          </ul>
          <Link to="/habits">→ Alla rutiner</Link>
        </div>

        <div className={s.homeitem}>
          <h3>Nästkommande händelser</h3>
          <ul>
            {upcomingEvents
            .filter((event) => event.userId === currentUser.userId)
            .slice(0, 3)
            .map((event, index) => (
              <li key={index}>
                <span className={s.date}>{formatDisplayDate(event.start)}</span>
                <span className={s.name}>{event.name}</span>
              </li>
            ))}
          </ul>
          <Link to="/eventplanner">→ Alla händelser</Link>
        </div>
      </div>
    </>
  )
}

export default HomePage
