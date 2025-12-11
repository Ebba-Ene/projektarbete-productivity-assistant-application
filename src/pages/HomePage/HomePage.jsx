import { useContext } from "react"
import { EventContext } from "../../context/EventContext"
import { formatDisplayDate } from "../../components/helper"
import { Link } from "react-router-dom"
import s from "./HomePage.module.css"

const HomePage = () => {
const { upcomingEvents } = useContext(EventContext)

  return (
    <>
      <h2>Startsida</h2>
      <div className={s.homecontainer}>
        <div className={s.homeitem}>
          <h3>Senaste ej utförda ärenden</h3>
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