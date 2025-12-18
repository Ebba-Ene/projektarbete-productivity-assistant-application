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
  const startDate = new Date(start);
  const endDate = new Date(end);

  if (!start || !end || !name.trim()) {
    return "Alla fält måste fyllas i.";
  }

  if (endDate <= startDate) {
    return "Sluttiden måste vara efter starttiden.";
  }

  return null;
};
