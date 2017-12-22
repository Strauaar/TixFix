import { combineReducers } from 'redux';

import categoryListReducer from './categoryListReducer';
import filterReducer from './filterReducer';
import loadingReducer from './loadingReducer';

export default combineReducers({
    filter: filterReducer,
    subcategory_list: categoryListReducer,
    loading: loadingReducer
})
