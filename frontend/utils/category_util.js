export const fetchSubCategoryList = (categoryId) => (
  $.ajax({
    method: 'GET',
    url: `api/subcategories/${categoryId}`
  })
);
