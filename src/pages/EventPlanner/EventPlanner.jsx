import { useState } from "react";

const EventPlanner = () => {
  const [events, setEvents] = useState([
    {
      start: "2025-01-10 09:00",
      end: "2025-01-10 10:30",
      name: "Projektmöte",
    },
    {
      start: "2025-01-11 13:00",
      end: "2025-01-11 14:00",
      name: "Lunch med kund",
    },
    {
      start: "2025-01-12 08:30",
      end: "2025-01-12 12:00",
      name: "Workshop",
    },
  ]);

  const addEvent = () => {

  }

  const removeEvent = (event) => {
    let newEventList = events.filter((e) => e !== event)
    setEvents(newEventList)
  }

  return (
    <>
      <h2>Event Planner</h2>
      <div>
        <ul>
          {events.map((event) => (
            <li>{event.start}-{event.end}: <strong>{event.name}</strong> <button onClick={() => removeEvent(event)}>Remove</button></li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default EventPlanner;
