export const eventByCategory = (state, categoryId) => {
  let eventObjs = Object.values(state.entities.events);
  return eventObjs.filter(eventObj => eventObj.category.id = categoryId);
};
