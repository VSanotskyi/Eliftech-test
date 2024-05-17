import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {eventsThunk} from "../redux/events/thunk";
import {eventsSelect} from "../redux/events/selectors";

import EventsList from "../components/Events/EventsList";

const EventsPage = () => {
  const dispatch = useDispatch()

  const events = useSelector(eventsSelect)

  useEffect(() => {
    dispatch(eventsThunk())
  }, [dispatch]);

  return (
    <>
      <EventsList events={events} />
    </>
  );
};

export {EventsPage};
