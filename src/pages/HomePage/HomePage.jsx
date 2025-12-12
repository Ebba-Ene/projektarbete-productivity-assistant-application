import { useContext } from "react"
import { EventContext } from "../../context/EventContext"
import { formatDisplayDate } from "../../components/helper"
import { Link } from "react-router-dom"
import s from "./HomePage.module.css"
import { TodoContext } from "../../context/TodoContext"

const HomePage = () => {
const { upcomingEvents } = useContext(EventContext)
const {todos} = useContext(TodoContext)


return (
  <>
      <h2>Startsida</h2>
      <div className={s.homecontainer}>
        <div className={s.homeitem}>
          <h3>Senaste ej utförda ärenden</h3>
          <ul>
            {todos.filter(todo => todo.status === false).slice(-3).map((todo, key) => 
            <li key={key}>
              <h3>{todo.title}</h3>
              <p>{todo.category}</p>
              <p>{todo.description}</p>
              <p>{todo.timeEstimateNumber} {todo.timeEstimate}</p>
              <p>{todo.deadline}</p>
            </li>)}
          </ul>
          <Link to='/todo'>→ Alla ärenden</Link>
        </div>

        <div className={s.homeitem}>
          <h3>Rutiner med högst antal repetitioner</h3>
        </div>

        <div className={s.homeitem}>
          <h3>Nästkommande händelser</h3>
          <ul>
            {upcomingEvents.slice(0,3).map((event, index) => 
              <li key={index}>
                <span className={s.date}>
                  {formatDisplayDate(event.start)}
                </span>
                <span className={s.name}>
                  {event.name}
                </span>
              </li>
            )}
          </ul>
          <Link to='/eventplanner'>→ Alla händelser</Link>
        </div>
      </div>
    </>
  )
}

export default HomePage