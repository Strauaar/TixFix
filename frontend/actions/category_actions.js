import * as CategoryApiUtil from '../utils/category_util';
export const RECEIVE_CATEGORY_LIST = "RECEIVE_CATEGORY_LIST";

const receiveCategoryList = (list) => ({
  type: RECEIVE_CATEGORY_LIST,
  list
})

export const fetchSubCategoryList = (id) => dispatch => (
  CategoryApiUtil.fetchSubCategoryList(id).then(subcategoryList => dispatch(receiveCategoryList(subcategoryList)))
);
