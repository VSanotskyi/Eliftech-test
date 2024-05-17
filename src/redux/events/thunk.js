import {createAsyncThunk} from "@reduxjs/toolkit";

import {getAllEvents} from "../../api/apiEvents";

const eventsThunk = createAsyncThunk(
  'events/getAll',
  async (_, {rejectWithValue}) => {
    try {
return await getAllEvents()
    }catch (e) {
      return rejectWithValue(e.message)
    }
  }
)

export {eventsThunk}
