import {Link, useLocation} from "react-router-dom";
import React from "react";
import css from './Item.module.css'

const Item = ({title, description, id, email, fullName}) => {
  const location = useLocation()

  return (<li className={css.eventsItem}>
    <div className={css.contentWrapper}>
      <h4 className={css.eventsItemTitle}>{title ? title : fullName}</h4>
      <p className={css.eventsItemText}>{description ? description : email}</p>
    </div>
    {description &&
      <div className={css.linkWrapper}>
        <Link className={css.eventsItemLink} to={`/registration/${id}`} state={location}>Register</Link>
        <Link className={css.eventsItemLink} to={`/view/${id}`}>View</Link>
      </div>}
  </li>);
};

export {Item};
