import { useContext, useState } from "react"
import { EventContext } from "../../context/EventContext"
import EventItem from "../EventItem/EventItem";
import s from "./EventList.module.css"
import { UserContext } from "../../context/UserContext";

const EventList = () => {
    const { currentUser } = useContext(UserContext)

    const { upcomingEvents, pastEvents } = useContext(EventContext);
    const [filter, setFilter] = useState("all")
    const now = new Date();

    const userUpcomingEvents = upcomingEvents.filter((event) => event.userId === currentUser.userId);
    const userPastEvents = pastEvents.filter((event) => event.userId === currentUser.userId);

    let sortedEvents = [...userUpcomingEvents, ...userPastEvents]

    if (filter === "upcoming") {
        sortedEvents = userUpcomingEvents
    }

    if (filter === "past") {
        sortedEvents = userPastEvents
    }

    return (
        <div className={s.eventlist}>
            <h3>Händelser</h3>

           <div className={s.filterbutton}>
                <span>Filter:</span>
                <button onClick={() => setFilter("all")} className={filter === "all" ? s.active : ""}>Alla</button>
                <button onClick={() => setFilter("upcoming")} className={filter === "upcoming" ? s.active : ""}>Kommande</button>
                <button onClick={() => setFilter("past")} className={filter === "past" ? s.active : ""}>Tidigare</button>
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