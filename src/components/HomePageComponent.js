import React from 'react';
import{ Home } from './HomeComponent';

export const HomePage = (props) => {

    const {dishes, promotions, leaders} = props;    
    return(
        <React.Fragment>
            <Home
                dish={dishes.filter((dish) => dish.featured)[0]}
                promotion={promotions.filter((promo) => promo.featured)[0]}
                leader={leaders.filter((leader) => leader.featured)[0]}   /> 
        </React.Fragment>
    );
}