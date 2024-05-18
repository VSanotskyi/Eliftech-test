import {apiServices} from "./apiServices";
import {eventsEnd, registrationEnd, usersEnd} from "../constants/urls";

const getAllEvents = async () => {
  const {data} = await apiServices.get(eventsEnd)

  return data
}

const registration = async (dto) => {
  const {data} = await apiServices.post(registrationEnd, dto)

  return data
}

const getAllUsersByIdEvent = async (id) => {
  const {data} = await apiServices.get(`${usersEnd}/${id}`)

  return data
}

export {
  getAllEvents,
  registration,
  getAllUsersByIdEvent,
}
