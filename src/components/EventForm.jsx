import { useContext, useState } from "react";
import { EventContext } from "../context/EventContext";

const EventForm = () => {
    const { addEvent } = useContext(EventContext)

    const now = new Date();
    const formatDateTimeLocal = (date) => {
        const pad = (d) => d.toString().padStart(2, "0");
        const year = date.getFullYear();
        const month = pad(date.getMonth() + 1);
        const day = pad(date.getDate());
        const hours = pad(date.getHours());
        const minutes = pad(date.getMinutes());
        return `${year}-${month}-${day}T${hours}:${minutes}`;
    };

    const [start, setStart] = useState(formatDateTimeLocal(now));
    const [end, setEnd] = useState(formatDateTimeLocal(now));
    const [name, setName] = useState("");

    const handleAdd = () => {
        addEvent(start, end, name);
        setName("");
    };
    
    return (
        <>
            <h3>Add Event</h3>
            <label>Start</label>
            <input type="datetime-local" value={start} min={formatDateTimeLocal(now)} onChange={(e) => setStart(e.target.value)}/>
            
            <label>End</label>
            <input type="datetime-local" value={end} min={formatDateTimeLocal(now)} onChange={(e) => setEnd(e.target.value)}/>
            
            <label>Event</label>
            <input type="text" value={name} placeholder="Event name" onChange={(e) => setName(e.target.value)}/>

            <button onClick={handleAdd}>Add</button>
        </>
    );
};

export default EventForm;