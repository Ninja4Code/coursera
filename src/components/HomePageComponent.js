import React from 'react';
import { Home } from './HomeComponent';

export const HomePage = (props) => {
    const {dishes, promotions, leaders} = props;    
    return (        
        <React.Fragment>
            <Home
                dish={dishes.dishes.filter((dish) => dish.featured)[0]}
                promotion={promotions.filter((promo) => promo.featured)[0]}
                dishesLoading={dishes.isLoading}
                dishesErrMess={dishes.errMess}
                leader={leaders.filter((leader) => leader.featured)[0]}   />             
        </React.Fragment>
    );
}