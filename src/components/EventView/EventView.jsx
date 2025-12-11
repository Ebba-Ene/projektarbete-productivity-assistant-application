import { formatDisplayDate } from "../helper";
import s from "./EventView.module.css"

const EventView = ({ event, onEdit, onRemove, isPast }) => {
    return (
        <div className={s.itemcontainer}>
            {formatDisplayDate(event.start)} – {formatDisplayDate(event.end)}:{" "}
            <strong>{event.name}</strong>

            {!isPast && <button onClick={onEdit}>Redigera</button>}
            <button onClick={onRemove}>Ta bort</button>
        </div>
    );
};

export default EventView;