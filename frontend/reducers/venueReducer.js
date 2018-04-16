import { RECEIVE_VENUE } from '../actions/event_actions';
import { merge } from 'lodash';

const venueReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_VENUE:
            let newState = action.image
            return newState;
        default:
            return state;
    }
};

export default venueReducer;
