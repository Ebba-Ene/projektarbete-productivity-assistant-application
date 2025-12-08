import { useContext, useEffect, useState } from "react";
import { EventContext } from "../context/EventContext";
import EventInputs from "./EventInputs";
import { formatDateTimeLocal } from "./date";

const EventForm = () => {
    const { addEvent } = useContext(EventContext)

    const now = new Date();

    const [start, setStart] = useState(formatDateTimeLocal(now));
    const [end, setEnd] = useState(formatDateTimeLocal(now));
    const [name, setName] = useState("");

    useEffect(() => {
        if (new Date(end) < new Date(start)) {
            setEnd(start);
        }
    }, [start]);

    const handleAdd = () => {
        if (name === "") {
            alert("Eventet måste ha ett namn.");
            return;
        }
        
        if (new Date(start) < now) {
            alert("Du kan inte välja ett förflutet datum.");
            return;
        }

        if (new Date(end) < new Date(start)) {
            alert("Sluttiden kan inte vara före starttiden.");
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