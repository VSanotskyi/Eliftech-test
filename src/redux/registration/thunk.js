import {createAsyncThunk} from "@reduxjs/toolkit";
import {getAllUsersByIdEvent, registration} from "../../api/apiEvents";

const registrationThunk = createAsyncThunk(
  'registration/addNewUser',
  async (dto, {rejectWithValue}) => {
    try {
      return await registration(dto)
    } catch (e) {
      return rejectWithValue(e.message)
    }
  }
)

const getAllUsersThunk = createAsyncThunk(
  'registration/getUsers',
  async (id, {rejectWithValue}) => {
    try {
      return await getAllUsersByIdEvent(id)
    } catch (e) {
      return rejectWithValue(e.message)
    }
  }
)

export {
  registrationThunk,
  getAllUsersThunk,
}
