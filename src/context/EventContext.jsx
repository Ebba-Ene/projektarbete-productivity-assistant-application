import { createContext, useState } from "react";

export const EventContext = createContext();

const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  const addEvent = (start, end, name) => {
    const newEvent = {
      start,
      end,
      name,
    };

    setEvents([...events, newEvent]);
  };

  const removeEvent = (event) => {
    setEvents(events.filter((e) => e !== event));
  };

  return (
    <EventContext value={{ events, addEvent, removeEvent }}>
      {children}
    </EventContext>
  );
};

export default EventProvider;
