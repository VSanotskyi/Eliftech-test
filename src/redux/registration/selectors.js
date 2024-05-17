const usersSelect = (state) => state.registration.users
const loadingSelect = (state) => state.registration.loading
const errorSelect = (state) => state.registration.error

export {
  usersSelect,
  loadingSelect,
  errorSelect,
}
