import {createSlice} from "@reduxjs/toolkit";
import {getAllUsersThunk, registrationThunk} from "./thunk";

const handlePending = (state) => {
  state.error = null
  state.loading = true
}

const handleRejected = (state, {payload}) => {
  state.loading = false
  state.error = payload
}

const initialState = {
  users: [],
  loading: false,
  error: null,
}

const registrationSlice = createSlice({
  name: 'registrationSlice',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registrationThunk.pending, handlePending)
      .addCase(getAllUsersThunk.pending, handlePending)
      .addCase(registrationThunk.fulfilled, (state) => {
        state.loading = false
        state.error = null
      })
      .addCase(getAllUsersThunk.fulfilled, (state, {payload}) => {
        state.loading = false
        state.users = payload
      })
      .addCase(registrationThunk.rejected, handleRejected)
      .addCase(getAllUsersThunk.rejected, handleRejected)
  }
})

export const registrationReducer = registrationSlice.reducer
