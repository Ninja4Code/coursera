import React from 'react';
import { DishDetail } from './DishDetailComponent';

export const DishWithId = (props) => {
    const {dishes, comments, match, addComment} = props;
    const {dishId} = match.params;
    return(
        <DishDetail dish={dishes.dishes.filter((dish) => dish.id === parseInt(dishId,10))[0]} 
           isLoading={dishes.isLoading}
           errMess={dishes.errMess}          
           comments={comments.comments.filter((comment) => comment.dishId === parseInt(dishId,10))}
           commentsErrMess={comments.errMess}
           addComment={addComment}
        />       
     );
};
  