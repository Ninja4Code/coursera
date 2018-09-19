import React from 'react';
import { DishDetail } from './DishDetailComponent';

export const DishWithId = (props) => {
    const {dishes, comments, match} = props;
    const {dishId} = match.params;
    return(
        <DishDetail dish={props.dishes.dishes.filter((dish) => dish.id === parseInt(dishId,10))[0]} 
           comments={comments.filter((comment) => comment.dishId === parseInt(dishId,10))}
           isLoading={props.dishes.isLoading}
           errMess={props.dishes.errMess}
           addComment = {props.addComment} />       
     );
};
  