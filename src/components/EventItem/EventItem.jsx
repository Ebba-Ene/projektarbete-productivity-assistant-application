import { useContext, useState } from "react";
import { EventContext } from "../../context/EventContext";
import EventEdit from "../EventEdit/EventEdit";
import EventView from "../EventView/EventView";
import s from "./EventItem.module.css";

const EventItem = ({ event, isPast }) => {
  const { removeEvent } = useContext(EventContext);

  const [isEditing, setEditing] = useState(false);

  const itemClass = isPast ? `${s.item} ${s.past}` : s.item;

  return (
    <>
      <li className={itemClass}>
        {isEditing ? (
          <>
            <EventEdit event={event} onCancel={() => setEditing(false)} />
          </>
        ) : (
          <>
            <EventView event={event} isPast={isPast} onEdit={() => setEditing(true)} onRemove={() => removeEvent(event.id)} />
          </>
        )}
      </li>
    </>
  );
};

export default EventItem;
