import {Route, Routes} from "react-router-dom";

import {EventsPage} from "../pages/EventsPage";
import {EventRegistrationPage} from "../pages/EventRegistrationPage";
import {EventParticipantsPage} from "../pages/EventParticipantsPage";

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<EventsPage/>}/>
      <Route path='/registration/:id' element={<EventRegistrationPage/>}/>
      <Route path='/view/:id' element={<EventParticipantsPage/>}/>
    </Routes>
  );
};
