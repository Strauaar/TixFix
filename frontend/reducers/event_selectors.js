export const eventsByCategory = (events, categoryId) => {

  let eventObjs = Object.values(events);


  let filteredEvents = eventObjs.filter(eventObj => eventObj.category.id === categoryId);

  let newState = {};
  filteredEvents.forEach(event => {
    newState[event.id] = event;
  });
  return newState;
};
