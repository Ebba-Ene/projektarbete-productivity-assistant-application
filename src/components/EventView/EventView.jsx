import { formatDisplayDate } from "../helper";

const EventView = ({ event, onEdit, onRemove, isPast }) => {
    return (
        <>
            {formatDisplayDate(event.start)} – {formatDisplayDate(event.end)}:{" "}
            <strong>{event.name}</strong>

            {!isPast && <button onClick={onEdit}>Edit</button>}
            <button onClick={onRemove}>Remove</button>
        </>
    );
};

export default EventView;