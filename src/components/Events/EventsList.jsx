import css from './EventsList.module.css'
import EventsItem from "./EventsItem";

const EventsList = ({events}) => {
  return (
    <div className={css.eventsWrapper}>
      <h2 className={css.eventsTitle}>Events</h2>
      {
        events && events.map(event => <EventsItem key={event._id} event={event}/>)
      }
    </div>
  );
};

export default EventsList;
