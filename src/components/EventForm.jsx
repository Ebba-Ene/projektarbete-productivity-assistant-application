import { useContext, useState } from "react";
import { EventContext } from "../context/EventContext";
import EventInputs from "./EventInputs";
import { formatDateTimeLocal, validateDates } from "./date";

const EventForm = () => {
    const { addEvent } = useContext(EventContext)

    const now = new Date();

    const [start, setStart] = useState(formatDateTimeLocal(now));
    const [end, setEnd] = useState(formatDateTimeLocal(now));
    const [name, setName] = useState("");

    const handleAdd = () => {
        const error = validateDates(start, end);
        if (error) {
            alert(error);
            return;
        }
        
        addEvent(start, end, name);
        setName("");
    };
    
    return (
        <>
            <h3>Add Event</h3>

            <EventInputs start={start} end={end} name={name} setStart={setStart} setEnd={setEnd} setName={setName}/>

            <button onClick={handleAdd}>Add</button>
        </>
    );
};

export default EventForm;