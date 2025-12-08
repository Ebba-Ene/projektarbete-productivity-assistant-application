import { formatDateTimeLocal } from "./eventUtils";

const EventInputs = ({ start, end, name, setStart, setEnd, setName, minStart }) => {
  const now = new Date();

  return (
    <>
      <label>Start</label>
      <input type="datetime-local" value={start} min={minStart} onChange={(e) => setStart(e.target.value)}/>

      <label>End</label>
      <input type="datetime-local" value={end} min={start} onChange={(e) => setEnd(e.target.value)}/>

      <label>Event name</label>
      <input type="text" value={name} placeholder="Event name" onChange={(e) => setName(e.target.value)}/>
    </>
  );
};

export default EventInputs;
