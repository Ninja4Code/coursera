import * as ActionTypes from './ActionTypes';

// This is a REDUX ACTION CREATOR
// It's simply a method that returns an ACTION TYPE and PAYLOAD
// Enclosed in an ACTION object
// This will passed the ACTION object to the REDUCER
export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }    
});