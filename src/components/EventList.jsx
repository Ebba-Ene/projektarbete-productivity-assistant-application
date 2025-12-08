import { useContext } from "react"
import { EventContext } from "../context/EventContext"
import EventItem from "./EventItem"

const EventList = () => {
    const { events } = useContext(EventContext);

    return (
        <>
            <h3>All Events</h3>
            <ul>
                {events.map((event) => (
                    <EventItem key={event.id} event={event}/>
                ))}
            </ul>
        </>
    );
};

export default EventList;