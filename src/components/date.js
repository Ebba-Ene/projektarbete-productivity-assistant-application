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

export const validateDates = (start, end) => {
  const now = new Date();

  new Date(start) < now ? "Du kan inte välja ett förflutet datum." : null;
  new Date(end) < new Date(start) ? "Sluttiden kan inte vara före starttiden." : null;
};
