import {createAsyncThunk} from "@reduxjs/toolkit";
import {getAllUsersByIdEvent, registration} from "../../api/apiEvents";

const registrationThunk = createAsyncThunk(
  'registration/addNewUser',
  async (dto, {rejectedWithValue}) => {
    try {
      return await registration(dto)
    } catch (e) {
      return rejectedWithValue(e.message)
    }
  }
)

const getAllUsersThunk = createAsyncThunk(
  'registration/getUsers',
  async (id, {rejectedWithValue}) => {
    try {
      return await getAllUsersByIdEvent(id)
    } catch (e) {
      return rejectedWithValue(e.message)
    }
  }
)

export {
  registrationThunk,
  getAllUsersThunk,
}
