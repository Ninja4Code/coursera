import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            comment.rating = 5;
           // comment.dishId = 0;
           // console.log(comment);
           // COMMENTS.concat(comment);
           // console.log("Comment length: ", COMMENTS.length);
            return state.concat(comment);

        default:
          return state;
      }
};