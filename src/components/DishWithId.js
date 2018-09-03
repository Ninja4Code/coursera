import React from 'react';
import { DishDetail } from './DishDetailComponent';

export const DishWithId = (props) => {
    const {dishes, comments, match} = props;
    const {dishId} = match.params;
    return(
        <DishDetail dish={dishes.filter((dish) => dish.id === parseInt(dishId,10))[0]} 
           comments={comments.filter((comment) => comment.dishId === parseInt(dishId,10))}
           addComment = {props.addComment} />       
     );
};
  