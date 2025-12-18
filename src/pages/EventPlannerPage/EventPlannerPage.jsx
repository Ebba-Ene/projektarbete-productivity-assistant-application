import EventForm from "../../components/EventForm/EventForm";
import EventList from "../../components/EventList/EventList";
import s from "./EventPlannerPage.module.css";

const EventPlannerPage = () => {
  return (
    <>
      <h2>Händelseplanerare</h2>
      <div className={s.container}>
        <EventForm />
        <EventList />
      </div>
    </>
  );
};

export default EventPlannerPage;
