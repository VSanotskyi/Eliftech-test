import EventsItem from "./EventsItem";
import css from './EventsList.module.css'

const EventsList = ({events}) => {
  return (
    <div className={css.eventsWrapper}>
      <h2 className={css.eventsTitle}>Events</h2>
      <ul className={css.eventsList}>
        {
          events && events.map(event => <EventsItem key={event._id} event={event}/>)
        }
      </ul>

    </div>
  );
};

export default EventsList;
