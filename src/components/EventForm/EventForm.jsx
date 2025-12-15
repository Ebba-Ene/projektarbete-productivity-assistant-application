import { useContext, useState } from "react";
import { EventContext } from "../../context/EventContext";
import { formatDateTimeLocal, validateEvent } from "../helper";
import EventInputs from "../EventInputs/EventInputs";
import s from "./EventForm.module.css"
import { UserContext } from "../../context/UserContext";

const EventForm = () => {
    const { currentUser } = useContext(UserContext)

    const { addEvent } = useContext(EventContext)

    const now = new Date();

    const [start, setStart] = useState(formatDateTimeLocal(now));
    const [end, setEnd] = useState(formatDateTimeLocal(now));
    const [name, setName] = useState("");

    const handleAdd = () => {
        const error = validateEvent(start, end, name);
        if (error) {
            return alert(error);
        }
        
        addEvent(currentUser.userId, start, end, name);
        setName("");
    };
    
    return (
        <div className={s.eventform}>
            <h3>Skapa händelse</h3>
            <div className={s.form}>
                <EventInputs start={start} end={end} name={name} setStart={setStart} setEnd={setEnd} setName={setName} isEdit={false} showLabels={true}/>

                <button className={s.addbutton} onClick={handleAdd}>Lägg till</button>
            </div>
        </div>
    );
};

export default EventForm;