import { useEffect } from "react";
import { formatDateTimeLocal } from "../helper";

const EventInputs = ({ start, end, name, setStart, setEnd, setName }) => {
    const now = new Date();

    useEffect(() => {
        const startDate = new Date(start);
        const endDate = new Date(end);
    
        if (endDate < startDate) {
          setEnd(start);
        }
    }, [start, end]);
    
    return (
        <>
            <label>Starttid</label>
            <input type="datetime-local" value={start} min={formatDateTimeLocal(now)} onChange={(e) => setStart(e.target.value)}/>
            
            <label>Sluttid</label>
            <input type="datetime-local" value={end} min={start} onChange={(e) => setEnd(e.target.value)}/>
            
            <label>Händelsenamn</label>
            <input type="text" value={name} placeholder="Event name" onChange={(e) => setName(e.target.value)}/>
        </>
    );
};

export default EventInputs;