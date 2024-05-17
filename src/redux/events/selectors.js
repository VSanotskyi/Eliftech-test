const eventsSelect = (state) => state.events.events
const loadingSelect = (state) => state.events.loading
const errorSelect = (state) => state.events.error

export {
  eventsSelect,
  loadingSelect,
  errorSelect,
}
