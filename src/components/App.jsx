import {Route, Routes} from "react-router-dom";

import {EventsPage} from "../pages/EventsPage";
import {EventRegistrationPage} from "../pages/EventRegistrationPage";

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<EventsPage/>}/>
      <Route path='/registration/:id' element={<EventRegistrationPage/>}/>
    </Routes>
  );
};
