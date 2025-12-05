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

  const now = new Date();
  const formatDateTimeLocal = (date) => {
    const pad = (d) => d.toString().padStart(2, "0");
    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  const [eventStart, setEventStart] = useState(formatDateTimeLocal(now));
  const [eventEnd, setEventEnd] = useState(formatDateTimeLocal(now));
  const [eventName, setEventName] = useState("");

  const addEvent = () => {
    const newEvent = {
      start: eventStart,
      end: eventEnd,
      name: eventName,
    };

    setEvents([...events, newEvent]);
  };

  const removeEvent = (event) => {
    setEvents(events.filter((e) => e !== event));
  };

  return (
    <>
      <h2>Event Planner</h2>
      <div>
        <label>Start</label>
        <input
          type="datetime-local"
          value={eventStart}
          min={formatDateTimeLocal(now)}
          onChange={(e) => setEventStart(e.target.value)}
        />

        <label>End</label>
        <input
          type="datetime-local"
          value={eventEnd}
          min={formatDateTimeLocal(now)}
          onChange={(e) => setEventEnd(e.target.value)}
        />

        <label>Event</label>
        <input
          type="text"
          placeholder="Event name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />

        <button onClick={addEvent}>Add</button>

        <ul>
          {events.map((event, index) => (
            <li key={index}>
              {event.start}-{event.end}: <strong>{event.name}</strong>
              <button onClick={() => removeEvent(event)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default EventPlanner;
