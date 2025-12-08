import { useContext, useState } from "react";
import { EventContext } from "../context/EventContext";
import { formatDateTimeLocal, useSyncEndWithStart, validateEvent } from "./eventUtils";
import EventInputs from "./EventInputs";

const EventForm = () => {
    const { addEvent } = useContext(EventContext)

    const now = new Date();

    const [start, setStart] = useState(formatDateTimeLocal(now));
    const [end, setEnd] = useState(formatDateTimeLocal(now));
    const [name, setName] = useState("");

    useSyncEndWithStart(start, end, setEnd);

    const handleAdd = () => {
        const error = validateEvent(start, end, name)
        if (error) {
            return alert(error);
        }
        
        addEvent(start, end, name);
        setName("");
    };
    
    return (
        <>
            <h3>Add Event</h3>

            <EventInputs start={start} end={end} name={name} setStart={setStart} setEnd={setEnd} setName={setName} minStart={formatDateTimeLocal(now)}/>

            <button onClick={handleAdd}>Add</button>
        </>
    );
};

export default EventForm;