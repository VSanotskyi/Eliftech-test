import {configureStore} from "@reduxjs/toolkit";

import {eventsReducer} from "./events/slice";
import {registrationReducer} from "./registration/slice";

const store = configureStore({
  reducer: {
    events: eventsReducer,
    registration: registrationReducer,
  }
})

export {store}
