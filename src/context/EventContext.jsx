import { createContext, useEffect, useState } from "react";

export const EventContext = createContext();

const EventProvider = ({ children }) => {
  const [events, setEvents] = useState(JSON.parse(localStorage.getItem("events")) || []);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events))
  },[events])

  const addEvent = (userId, start, end, name) => {
    const newEvent = {
      userId,
      id: crypto.randomUUID(),
      start,
      end,
      name,
    };

    setEvents([...events, newEvent]);
  };

  const removeEvent = (id) => {
    const remainingEvents = events.filter((event) => event.id !== id);
    setEvents(remainingEvents);
  };

  const editEvent = (id, start, end, name) => {
    const editedEventList = events.map((event) => 
      event.id === id ? {...event, start, end, name} : event
    );
    
    setEvents(editedEventList);
  };
  
  const now = new Date();

  const upcomingEvents = events
    .filter(e => new Date(e.end) >= now)
    .sort((a, b) => new Date(a.start) - new Date(b.start))

  const pastEvents = events
    .filter(e => new Date(e.end) < now)
    .sort((a, b) => new Date(b.start) - new Date(a.start))
  
  return (
    <EventContext value={{ events, addEvent, removeEvent, editEvent, upcomingEvents, pastEvents }}>
      {children}
    </EventContext>
  );
};

export default EventProvider;
