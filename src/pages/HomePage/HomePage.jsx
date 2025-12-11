import { useContext } from "react"
import { EventContext } from "../../context/EventContext"
import { formatDisplayDate } from "../../components/helper"
import { Link } from "react-router-dom"

const HomePage = () => {
const { upcomingEvents } = useContext(EventContext)

  return (
    <>
      <h1>Livsplanerare</h1>
      <h2>Startsida</h2>

      <h3>Ej utförda ärenden</h3>

      <h3>Kommande händelser</h3>
      <ul>
        {upcomingEvents.slice(0,3).map((event, index) => 
          <li key={index}>
            {formatDisplayDate(event.start)} – {formatDisplayDate(event.end)}:{" "}
            <strong>{event.name}</strong>
          </li>
        )}
      </ul>
      <Link to='/eventplanner'>Alla händelser</Link>

      <h3>Rutiner</h3>
    </>
  )
}

export default HomePage