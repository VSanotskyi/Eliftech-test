import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {eventsThunk} from "../redux/events/thunk";
import {eventsSelect} from "../redux/events/selectors";

import List from "../components/LIst/List";
import {Item} from "../components/Item/Item";
import {Pagination} from "../components/Pagination/Pagination";

const itemsPerPage = 4

const EventsPage = () => {
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(1)

  const events = useSelector(eventsSelect)

  const totalPage = Math.ceil(events.length / itemsPerPage)

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPage))
  }

  const handlePrev = () => {
    setCurrentPage((prev) => Math.min(prev - 1, 1))
  }

  const currentEvents = events.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  useEffect(() => {
    dispatch(eventsThunk())
  }, [dispatch]);

  return (<>
    <List
      title='Events'
      items={currentEvents}
      RenderItems={(item) => (<Item key={item._id}
                                    title={item.title}
                                    id={item._id}
                                    description={item.description}/>)}
      pagination={<Pagination
        totalPage={totalPage}
        currentPage={currentPage}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />}
    />
  </>);
};

export {EventsPage};
