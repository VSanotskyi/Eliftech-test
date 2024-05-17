import {createSlice} from "@reduxjs/toolkit";
import {getAllUsersThunk, registrationThunk} from "./thunk";

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
      .addCase(registrationThunk.pending, (state) => {
        state.loading = true
      })
      .addCase(registrationThunk.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(registrationThunk.rejected, (state, {payload}) => {
        state.loading = false
        state.error = payload
      })
      .addCase(getAllUsersThunk.pending, (state) => {
        state.loading = true
      })
      .addCase(getAllUsersThunk.fulfilled, (state, {payload}) => {
        state.loading = false
        state.users = payload
      })
      .addCase(getAllUsersThunk.rejected, (state, {payload}) => {
        state.loading = false
        state.error = payload
      })
  }
})

export const registrationReducer = registrationSlice.reducer
