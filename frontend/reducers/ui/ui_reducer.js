import { combineReducers } from 'redux';

import categoryListReducer from './categoryListReducer';
import filterReducer from './filterReducer';

export default combineReducers({
    filter: filterReducer,
    subcategory_list: categoryListReducer
})
