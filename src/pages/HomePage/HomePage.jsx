import { useContext, useState } from "react"
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
  const [habitsDisplay, setHabitsDisplay] = useState([...habits])

  return (
    <>
      <Quote />

      <div className={s.homecontainer}>
        <div className={s.homeitem}>
          <div className={s.header}>
            <h3>Ärenden</h3>
            <Link to="/todo">
              → <span>Alla ärenden</span>
            </Link>
          </div>
          <div className={s.listcontainer}>
            <ul>
              {todos
                .filter((todo) => todo.userId === currentUser.userId)
                .filter((todo) => todo.status === false)
                .slice(-3)
                .map((todo, key) => (
                  <li key={key}>
                    <p className={s.date}>
                      <strong>Deadline: </strong>
                      {todo.deadline}
                    </p>
                    <p className={s.name}>{todo.title}</p>
                    <p className={s.desc}>{todo.description}</p>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div className={s.homeitem}>
          <div className={s.header}>
            <h3>Rutiner</h3>
            <Link to="/habits">
              → <span>Alla rutiner</span>
            </Link>
          </div>
          <div className={s.listcontainer}>
            <ul>
              {habits.length > 0 &&
                habitsDisplay
                  .sort((a, b) => b.repetitions - a.repetitions)
                  .filter((habits) => habits.userId === currentUser.userId)
                  .slice(0, 3)
                  .map((item, i) => (
                    <li key={i}>
                      <p className={s.date}>
                        <strong>Repetitioner: </strong>
                        {item.repetitions}
                      </p>
                      <p className={s.name}>{item.title}</p>
                    </li>
                  ))}
            </ul>
          </div>
        </div>

        <div className={s.homeitem}>
          <div className={s.header}>
            <h3>Händelser</h3>
            <Link to="/eventplanner">
              → <span>Alla händelser</span>
            </Link>
          </div>
          <div className={s.listcontainer}>
            <ul>
              {upcomingEvents
                .filter((event) => event.userId === currentUser.userId)
                .slice(0, 3)
                .map((event, index) => (
                  <li key={index}>
                    <span className={s.date}>
                      {formatDisplayDate(event.start)}
                    </span>
                    <span className={s.name}>{event.name}</span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
