export const fetchSubCategoryList = (categoryId) => (
  $.ajax({
    method: 'GET',
    url: `api/categories/${categoryId}`,
    data: {type: 'list'}
  })
);

export const fetchSubCategoryEvents = (subcategory_id) => (
  $.ajax({
    method:'GET',
    url:`api/categories/${subcategory_id}`,
    data: {type: 'events'}
  })
);
