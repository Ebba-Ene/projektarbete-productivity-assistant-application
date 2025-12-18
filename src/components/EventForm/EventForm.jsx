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
            alert(error);
            return;
        }
        
        addEvent(currentUser.userId, start, end, name);
        setStart(formatDateTimeLocal(new Date()))
        setEnd(formatDateTimeLocal(new Date()))
        setName("");
    };
    
    return (
        <div className={s.eventform}>
            <h3>Skapa händelse</h3>
            <form noValidate className={s.form} onSubmit={(e) => {
                e.preventDefault()
                handleAdd()
                }}>
                <EventInputs start={start} end={end} name={name} setStart={setStart} setEnd={setEnd} setName={setName} isEdit={false} showLabels={true}/>

                <button type="submit" className={s.addbutton}>Lägg till</button>
            </form>
        </div>
    );
};

export default EventForm;