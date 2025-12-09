import { createContext, useState } from "react";

export const EventContext = createContext();

const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  const addEvent = (start, end, name) => {
    const newEvent = {
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

  return (
    <EventContext value={{ events, addEvent, removeEvent, editEvent }}>
      {children}
    </EventContext>
  );
};

export default EventProvider;
