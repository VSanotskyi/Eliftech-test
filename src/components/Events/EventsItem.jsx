import React from 'react';

import css from './EventsItem.module.css'
import {Link, useLocation} from "react-router-dom";

const EventsItem = ({event}) => {
  const location = useLocation()

  return (
    <li className={css.eventsItem}>
      <div className={css.contentWrapper}>
        <h4 className={css.eventsItemTitle}>{event.title}</h4>
        <p className={css.eventsItemText}>{event.description}</p>
      </div>
      <div className={css.linkWrapper}>
        <Link className={css.eventsItemLink} to={`/registration/${event._id}`} state={location}>Register</Link>
        <Link className={css.eventsItemLink} to={'/view'}>View</Link>
      </div>
    </li>
  );
};

export default EventsItem;
