import { useContext } from "react"
import { EventContext } from "../context/EventContext"

const EventItem = ({ event }) => {
    const { removeEvent } = useContext(EventContext)

    return(<>
        <li>
            {event.start} – {event.end}: <strong>{event.name}</strong>
            <button onClick={() => removeEvent(event)}>Remove</button>
        </li>
    </>)
}

export default EventItem