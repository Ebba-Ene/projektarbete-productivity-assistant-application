import { useContext, useState } from "react"
import { EventContext } from "../../context/EventContext"
import { useSyncEndWithStart, validateEvent } from "../helper";
import EventInputs from "../EventInputs/EventInputs";

const EventEdit = ({ event, onCancel }) => {
    const { editEvent } = useContext(EventContext);

    const [name, setName] = useState(event.name);
    const [start, setStart] = useState(event.start);
    const [end, setEnd] = useState(event.end);

    useSyncEndWithStart(start, end, setEnd);

    const saveEdit = () => {
        const error = validateEvent(start, end, name);
        if (error) {
            return alert(error);
        }

        editEvent(event.id, start, end, name);
        onCancel();
    }

    return (
        <>
            <EventInputs start={start} end={end} name={name} setStart={setStart} setEnd={setEnd} setName={setName}/>

            <button onClick={onCancel}>Cancel</button>
            <button onClick={saveEdit}>Save</button>

        </>
    );
};

export default EventEdit;