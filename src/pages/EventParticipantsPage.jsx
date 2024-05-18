import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useParams} from "react-router-dom";

import {getAllUsersThunk} from "../redux/registration/thunk";
import {usersSelect} from "../redux/registration/selectors";

import List from "../components/LIst/List";
import {Item} from "../components/Item/Item";
import {BtnGoBack} from "../components/BtnGoBack/BtnGoBack";

const EventParticipantsPage = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const {id} = useParams()

  const events = useSelector(usersSelect)

  useEffect(() => {
    dispatch(getAllUsersThunk(id))
  }, [dispatch, id]);

  return (
    <List btnGoBack={<BtnGoBack location={location}/>} title='"Awesome Event" participants' items={events}
          RenderItems={(item) => (
            <Item key={item._id}
                  fullName={item.fullName}
                  id={item._id}
                  email={item.email}
            />
          )}/>
  );
};

export {EventParticipantsPage};
