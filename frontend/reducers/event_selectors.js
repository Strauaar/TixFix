export const eventsByCategory = (events, categoryId) => {
  console.log(events);
  let eventObjs = Object.values(events);
  console.log(eventObjs);

  let filteredEvents = eventObjs.filter(eventObj => eventObj.category.id === categoryId);
  console.log(filteredEvents);

  let newState = {};
  filteredEvents.forEach(event => {
    newState[event.id] = event;
  });
  return newState;
};
