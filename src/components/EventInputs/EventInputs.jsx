import { formatDateTimeLocal, useSyncEndWithStart } from "../helper";

const EventInputs = ({ start, end, name, setStart, setEnd, setName }) => {
    const now = new Date();

    useSyncEndWithStart(start, end, setEnd);
    
    return (
        <>
            <label>Start</label>
            <input type="datetime-local" value={start} min={formatDateTimeLocal(now)} onChange={(e) => setStart(e.target.value)}/>
            
            <label>End</label>
            <input type="datetime-local" value={end} min={start} onChange={(e) => setEnd(e.target.value)}/>
            
            <label>Event name</label>
            <input type="text" value={name} placeholder="Event name" onChange={(e) => setName(e.target.value)}/>
        </>
    );
};

export default EventInputs;