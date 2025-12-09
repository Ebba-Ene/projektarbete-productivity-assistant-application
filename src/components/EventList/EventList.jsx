import { useContext } from "react"
import { EventContext } from "../../context/EventContext"
import EventItem from "../EventItem/EventItem";

const EventList = () => {
    const { events } = useContext(EventContext);

    const sortedEvents = [...events].sort(
        (a, b) => new Date(a.start) - new Date(b.start)
    );

    return (
        <>
            <h3>All Events</h3>
            
            <ul>
                {sortedEvents.map((event) => (
                    <EventItem key={event.id} event={event}/>
                ))}
            </ul>
        </>
    );
};

export default EventList;