import { useContext, useState } from "react"
import { EventContext } from "../context/EventContext"

const EventItem = ({ event }) => {
    const { removeEvent, editEvent } = useContext(EventContext);

    const [isEditing, setEditing] = useState(false);

    const [name, setName] = useState(event.name);
    const [start, setStart] = useState(event.start);
    const [end, setEnd] = useState(event.end);

    const now = new Date();

    const formatDateTimeLocal = (date) => {
        const d = new Date(date);

        const pad = (v) => v.toString().padStart(2, "0");
        const year = d.getFullYear();
        const month = pad(d.getMonth() + 1);
        const day = pad(d.getDate());
        const hours = pad(d.getHours());
        const minutes = pad(d.getMinutes());
        return `${year}-${month}-${day}T${hours}:${minutes}`;
    };

    const formatDisplayDate = (date) => {
            return new Date(date).toLocaleString("sv-SE", {
            dateStyle: "long",
            timeStyle: "short",
        });
    };

    const cancelEdit = () => {
        setStart(event.start);
        setEnd(event.end);
        setName(event.name);
        setEditing(false);
    }

    const saveEdit = () => {
        if (new Date(start) < now) {
            alert("Du kan inte välja ett förflutet datum.");
            return;
        }

        if (new Date(end) < new Date(start)) {
            alert("Sluttiden kan inte vara före starttiden.");
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
                        <label>Start</label>
                        <input type="datetime-local" value={formatDateTimeLocal(start)} min={formatDateTimeLocal(now)} onChange={(e) => setStart(e.target.value)}/>

                        <label>End</label>
                        <input type="datetime-local" value={formatDateTimeLocal(end)} min={start} onChange={(e) => setEnd(e.target.value)}/>

                        <label>Event name</label>
                        <input type="text" value={name} placeholder="Event name" onChange={(e) => setName(e.target.value)}/>

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