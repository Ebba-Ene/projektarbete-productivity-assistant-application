import { formatDisplayDate } from "../helper";

const EventView = ({ event, onEdit, onRemove, isPast }) => {
    return (
        <>
            {formatDisplayDate(event.start)} – {formatDisplayDate(event.end)}:{" "}
            <strong>{event.name}</strong>

            {!isPast && <button onClick={onEdit}>Redigera</button>}
            <button onClick={onRemove}>Ta bort</button>
        </>
    );
};

export default EventView;