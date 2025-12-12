import { useContext, useState } from "react"
import { EventContext } from "../../context/EventContext"
import EventItem from "../EventItem/EventItem";
import s from "./EventList.module.css"

const EventList = () => {
    const { events, upcomingEvents, pastEvents } = useContext(EventContext);
    const [filter, setFilter] = useState("all")
    const now = new Date();

    let sortedEvents = [...upcomingEvents, ...pastEvents]

    if (filter === "upcoming") {
        sortedEvents = upcomingEvents
    }

    if (filter === "past") {
        sortedEvents = pastEvents
    }

    return (
        <div className={s.eventlist}>
            <h3>Händelser</h3>

           <div className={s.filterbutton}>
                <span>Filter:</span>
                <button onClick={() => setFilter("all")}>Alla</button>
                <button onClick={() => setFilter("upcoming")}>Kommande</button>
                <button onClick={() => setFilter("past")}>Tidigare</button>
            </div>

            <ul>
                {sortedEvents.map((event) => (
                    <EventItem key={event.id} event={event} isPast={new Date(event.end) < now}/>
                ))}
            </ul>
        </div>
    );
};

export default EventList;