import { useContext } from "react"
import { EventContext } from "../../context/EventContext"
import EventItem from "../EventItem/EventItem";

const EventList = () => {
    const { events } = useContext(EventContext);

    const now = new Date();

    const upcomingEvents = events
        .filter(e => new Date(e.end) >= now)
        .sort ((a, b) => new Date(a.start) - new Date(b.start))

    const pastEvents = events
        .filter(e => new Date(e.end) < now)
        .sort ((a, b) => new Date(b.start) - new Date(a.start))

    return (
        <>
            <h3>Event</h3>

            <h4>Kommande event</h4>
            <ul>
                {upcomingEvents.map((event) => (
                    <EventItem key={event.id} event={event} isPast={false}/>
                ))}
            </ul>

            {pastEvents.length > 0 && (
                <>
                    <h4>Tidigare event</h4>
                    <ul>
                        {pastEvents.map((event) => (
                            <EventItem key={event.id} event={event} isPast={true}/>
                        ))}
                    </ul>
                </>
            )}   
        </>
    );
};

export default EventList;