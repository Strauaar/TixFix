import { RECEIVE_VENUE } from '../actions/event_actions';
import { merge } from 'lodash';

const venueReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = {};
    switch(action.type) {
        case RECEIVE_VENUE:
            newState = merge({}, action.image)
            return newState;
        case default:
            return state;
    }
};

export default venueReducer;
