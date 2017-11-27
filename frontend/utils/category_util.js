export const fetchSubCategoryList = (categoryId) => (
  $.ajax({
    method: 'GET',
    url: `api/subcategories/${categoryId}`,
    data: {type: 'list'}
  })
);

export const fetchSubCateoryEvents = (subcategory_id) => (
  $.ajax({
    method:'GET',
    url:`api/subcategories/${subcategory_id}`,
    data: {type: 'events'}
  })
);
