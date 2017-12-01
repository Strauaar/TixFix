export const fetchEvents = (filter) => (
  $.ajax({
    method: 'GET',
    url: 'api/events',
    data: { filter }
  })
);

export const fetchEvent = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/events/${id}`,
  })
);

// export const fetchEventByCategory = (categoryId) => (
//   $.ajax({
//     method: 'GET',
//     url: `api/categories/${categoryId}`
//   })
// );

export const fetchMoreEvents = (currentCount, filter) => (
  $.ajax({
    method: 'GET',
    url: 'api/events',
    data: { currentCount,
            filter}
  })
);

export const fetchUpcomingEvents = () => (
  $.ajax({
    method: 'GET',
    url: 'api/user/upcoming_events'
  })
);

export const fetchSearchEvents = (filter) => (
  $.ajax({
    method: 'GET',
    url: 'api/event/searching',
    data: { filter }
  })
);
//
// export const fetchMoreEventsByCategory = (currentCount, categoryId) => (
//   $.ajax({
//     method: 'GET',
//     url: `api/categories/${categoryId}`,
//     data: { currentCount }
//   })
// );

// export const filterByDate = (categoryObj) => (
//   $.ajax({
//     method: 'GET',
//     url: `api/categories/${categoryObj.id}`,
//     data: { filter_type: categoryObj.filter_type,
//             count: categoryObj.count
//           }
//   })
// );
