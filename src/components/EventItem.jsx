import { useContext, useState } from "react"
import { EventContext } from "../context/EventContext"
import EventInputs from "./EventInputs";
import { formatDisplayDate, validateDates } from "./date";

const EventItem = ({ event }) => {
    const { removeEvent, editEvent } = useContext(EventContext);

    const [isEditing, setEditing] = useState(false);

    const [name, setName] = useState(event.name);
    const [start, setStart] = useState(event.start);
    const [end, setEnd] = useState(event.end);

    const cancelEdit = () => {
        setStart(event.start);
        setEnd(event.end);
        setName(event.name);
        setEditing(false);
    }

    const saveEdit = () => {
        const error = validateDates(start, end)
        if (error) {
            alert(error);
            return;
        }

        editEvent(event.id, start, end, name);
        setEditing(false);
    }

    return (
        <>
            <li>
                {isEditing ? (
                    <>
                        <EventInputs start={start} end={end} name={name} setStart={setStart} setEnd={setEnd} setName={setName}/>

                        <button onClick={cancelEdit}>Cancel</button>
                        <button onClick={saveEdit}>Save</button>
                    </>   
                ) : (
                    <>
                        {formatDisplayDate(event.start)} – {formatDisplayDate(event.end)}:{" "}
                        <strong>{event.name}</strong>

                        <button onClick={() => setEditing(true)}>Edit</button>
                        <button onClick={() => removeEvent(event.id)}>Remove</button>
                    </>
                )}
            </li>
        </>
    );
};

export default EventItem;