import { useEffect } from "react";

export const formatDateTimeLocal = (date) => {
  const d = new Date(date);

  const pad = (v) => v.toString().padStart(2, "0");

  const year = d.getFullYear();
  const month = pad(d.getMonth() + 1);
  const day = pad(d.getDate());
  const hours = pad(d.getHours());
  const minutes = pad(d.getMinutes());

  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

export const formatDisplayDate = (date) =>
  new Date(date).toLocaleString("sv-SE", {
    dateStyle: "long",
    timeStyle: "short",
  });

export const validateEvent = (start, end, name) => {
    const now = new Date();
    const startDate = new Date(start);
    const endDate = new Date(end);

    now.setSeconds(0, 0);

    if (!name) {
        return "Eventet måste ha ett namn.";
    }

    if (startDate < now) {
        return "Du kan inte välja ett förflutet datum.";
    }

    if (endDate < startDate) {
        return "Sluttiden kan inte vara före starttiden.";
    }

    return null;
}

export const useSyncEndWithStart = (start, end, setEnd) => {
  useEffect(() => {
        if (new Date(end) < new Date(start)) {
            setEnd(start);
        }
    }, [start]);
}