import { formatDisplayDate } from "../helper";
import s from "./EventView.module.css";

const EventView = ({ event, onEdit, onRemove, isPast }) => {
  return (
    <div className={s.itemcontainer}>
      <span className={s.textcontainer}>
        <span className={s.date}>
          {formatDisplayDate(event.start)} – {formatDisplayDate(event.end)}:{" "}
        </span>
        <span className={s.name}>{event.name}</span>
      </span>

      <div className={s.buttoncontainer}>
        {!isPast && <button onClick={onEdit}>Redigera</button>}
        <button onClick={onRemove}>Ta bort</button>
      </div>
    </div>
  );
};

export default EventView;
