import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

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
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));
    return fetch(baseUrl + 'dishes')
    .then(response => {
        // HTTP status code 200-299
        if (response.ok) {
          return response;
        } else { // HTTP status code 400-599
          let error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      }, // Didn't even communicate with server
      error => {
            let errmess = new Error(error.message);
            //let errmess = new Error('Unable to retrieve dishes.  No connection to server.');
            throw errmess;
      })
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)));
}
export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});
export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});
export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});
export const fetchComments = () => (dispatch) => {    
    return fetch(baseUrl + 'comments')
    .then(response => {
        // HTTP status code 200-299
        if (response.ok) {
          return response;
        } else { // HTTP status code 400-599
          let error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      }, // Didn't even communicate with server
      error => {
            let errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
};
export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});
export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});
export const fetchPromos = () => (dispatch) => {    
    dispatch(promosLoading());

    return fetch(baseUrl + 'promotions')
    .then(response => {
        // HTTP status code 200-299
        if (response.ok) {
          return response;
        } else {  // HTTP status code 400-599
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      }, // Didn't even communicate with the server
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
    .catch(error => dispatch(promosFailed(error.message)));
}
export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});
export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});
export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});