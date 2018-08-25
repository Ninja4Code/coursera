import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

// Initial state for redux
// State here is our initialState, which represents the data from the .json files
export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};
// Reducer function
export const Reducer = (state = initialState, action) => {
    return state;
};