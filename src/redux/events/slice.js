import {createSlice} from "@reduxjs/toolkit";
import {eventsThunk} from "./thunk";

const initialState = {
  events: [],
  loading: false,
  error: null,
}

const eventsSlice = createSlice({
  name: 'eventsSlice',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(eventsThunk.pending, (state) => {
      state.loading = true
    })
    builder.addCase(eventsThunk.fulfilled, (state, {payload}) => {
      state.loading = false
      state.events = payload
    })
    builder.addCase(eventsThunk.rejected, (state, {payload}) => {
      state.loading = false
      state.error = payload
    })
  }
})

export const eventsReducer = eventsSlice.reducer
