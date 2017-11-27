import * as CategoryApiUtil from '../utils/category_util';
import { receiveEvents } from './event_actions';
export const RECEIVE_CATEGORY_LIST = "RECEIVE_CATEGORY_LIST";


const receiveCategoryList = (list) => ({
  type: RECEIVE_CATEGORY_LIST,
  list
})

export const fetchSubCategoryList = (id) => dispatch => (
  CategoryApiUtil.fetchSubCategoryList(id).then(subcategoryList => dispatch(receiveCategoryList(subcategoryList)))
);

export const fetchSubCategoryEvents = (id) => dispatch => (
  CategoryApiUtil.fetchSubCateoryEvents(id).then(events => dispatch(receiveEvents(events)))
);
