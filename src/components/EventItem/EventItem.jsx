import { useContext, useState } from "react"
import { EventContext } from "../../context/EventContext"
import EventEdit from "../EventEdit/EventEdit";
import EventView from "../EventView/EventView";

const EventItem = ({ event }) => {
    const { removeEvent } = useContext(EventContext);

    const [isEditing, setEditing] = useState(false);

    return (
        <>
            <li>
                {isEditing ? (
                    <>
                        <EventEdit event={event} onCancel={() => setEditing(false)}/>
                    </>   
                ) : (
                    <>
                        <EventView event={event} onEdit={() => setEditing(true)} onRemove={() => removeEvent(event.id)}/>
                    </>
                )}
            </li>
        </>
    );
};

export default EventItem;