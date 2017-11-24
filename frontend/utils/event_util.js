export const fetchEvents = () => (
  $.ajax({
    method: 'GET',
    url: 'api/events'
  })
);

export const fetchEventByCategory = (categoryId) => (
  $.ajax({
    method: 'GET',
    url: `api/categories/${categoryId}`
  })
);
