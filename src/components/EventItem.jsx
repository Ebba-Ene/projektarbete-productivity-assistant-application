import { useContext } from "react"
import { EventContext } from "../context/EventContext"

const EventItem = ({ event }) => {
    const { removeEvent } = useContext(EventContext)

    const formatDisplayDate = (date) => {
            return new Date(date).toLocaleString("sv-SE", {
            dateStyle: "long",
            timeStyle: "short",
        });
    };

    return(<>
        <li>
            {formatDisplayDate(event.start)} – {formatDisplayDate(event.end)}:{" "}
            <strong>{event.name}</strong>
            <button onClick={() => removeEvent(event)}>Remove</button>
        </li>
    </>)
}

export default EventItem