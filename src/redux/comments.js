import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

// This is a REDUX REDUCER
// This will morph the PREVIOUS comments STATE 
// Take some action based on the ACTION passed in
// Return NEW comments STATE
// NOTE: We don't have to use a switch statement
// We could use an if statement 
// Or an array of actions
export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            let comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();           
            return state.concat(comment);
        default:
          return state;
      }
};