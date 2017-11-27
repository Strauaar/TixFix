export const fetchEvents = () => (
  $.ajax({
    method: 'GET',
    url: 'api/events',
  })
);

export const fetchEvent = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/events/${id}`,
  })
);

export const fetchEventByCategory = (categoryId) => (
  $.ajax({
    method: 'GET',
    url: `api/categories/${categoryId}`
  })
);

export const fetchMoreEvents = (currentCount) => (
  $.ajax({
    method: 'GET',
    url: 'api/events',
    data: { currentCount }
  })
);

export const fetchMoreEventsByCategory = (currentCount, categoryId) => (
  $.ajax({
    method: 'GET',
    url: `api/categories/${categoryId}`,
    data: { currentCount }
  })
);
