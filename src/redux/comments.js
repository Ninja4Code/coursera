import * as ActionTypes from './ActionTypes';

// This is a REDUX REDUCER
// This will morph the PREVIOUS comments STATE 
// Take some action based on the ACTION passed in
// Return NEW comments STATE
// NOTE: We don't have to use a switch statement
// We could use an if statement 
// Or an array of actions
//export const Comments = (state = COMMENTS, action) => {
export const Comments = (state = { errMess: null, comments:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};
        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload};
        case ActionTypes.ADD_COMMENT:
            let comment = action.payload;           
            comment.id = state.comments.length;
            comment.date = new Date().toISOString();           
           return { ...state, comments: state.comments.concat(comment)};
        default:
          return state;
      }
};