import { useContext, useState } from "react"
import { EventContext } from "../../context/EventContext"
import { validateEvent } from "../helper";
import EventInputs from "../EventInputs/EventInputs";
import s from "./EventEdit.module.css"

const EventEdit = ({ event, onCancel }) => {
    const { editEvent } = useContext(EventContext);

    const [name, setName] = useState(event.name);
    const [start, setStart] = useState(event.start);
    const [end, setEnd] = useState(event.end);

    const saveEdit = () => {
        const error = validateEvent(start, end, name);
        if (error) {
            return alert(error);
        }

        editEvent(event.id, start, end, name);
        onCancel();
    }

    return (
        <div className={s.editcontainer}>
            <EventInputs start={start} end={end} name={name} setStart={setStart} setEnd={setEnd} setName={setName} isEdit={true} showLabels={false}/>

            <div className={s.buttoncontainer}>
                <button onClick={onCancel}>Ångra</button>
                <button onClick={saveEdit}>Spara</button>
            </div>
        </div>
    );
};

export default EventEdit;