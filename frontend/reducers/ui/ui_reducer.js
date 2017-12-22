import { combineReducers } from 'redux';

import categoryListReducer from './categoryListReducer';
import filterReducer from './filterReducer';
import loadingReducer from './loadingReducer';
import redirectReducer from './redirectReducer';

export default combineReducers({
    filter: filterReducer,
    subcategory_list: categoryListReducer,
    loading: loadingReducer,
    redirect_url: redirectReducer
})
