import { useEffect } from "react";
import { formatDateTimeLocal } from "../helper";
import s from "./EventInputs.module.css";

const EventInputs = ({ start, end, name, setStart, setEnd, setName, isEdit, showLabels }) => {
  const now = new Date();

  useEffect(() => {
    const startDate = new Date(start);
    const endDate = new Date(end);

    if (endDate < startDate) {
      setEnd(start);
    }
  }, [start, end, setEnd]);

  return (
    <div className={`${s.inputcontainer} ${isEdit ? s.edit : s.form}`}>
      {showLabels && <label>Starttid:</label>}
      <input type="datetime-local" value={start} min={isEdit ? undefined : formatDateTimeLocal(now)} onChange={(e) => setStart(e.target.value)}/>

      {!showLabels && <span> – </span>}

      {showLabels && <label>Sluttid:</label>}
      <input type="datetime-local" value={end} min={start} onChange={(e) => setEnd(e.target.value)}/>

      {!showLabels && <span> : </span>}

      {showLabels && <label>Händelse:</label>}
      <input type="text" value={name} placeholder="Händelsenamn" onChange={(e) => setName(e.target.value)}/>
    </div>
  );
};

export default EventInputs;
