import React from 'react';

import css from './EventsItem.module.css'

const EventsItem = ({event}) => {
  return (
    <li className={css.eventsItem}>
      <h4 className={css.eventsItemTitle}>{event.title}</h4>
      <p className={css.eventsItemText}>{event.description}</p>
      {/*<a className={css.eventsItemLink} href="#">Register</a>*/}
      {/*<a className={css.eventsItemLink} href="#">View</a>*/}
    </li>
  );
};

export default EventsItem;
