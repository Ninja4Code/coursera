import React from 'react';
import{ Home } from './HomeComponent';

export const HomePage = (props) => {
    const {dishes, promotions, leaders} = props;    
    return(
        
        <React.Fragment>
            <Home
                dish={props.dishes.dishes.filter((dish) => dish.featured)[0]}
                promotion={props.promotions.filter((promo) => promo.featured)[0]}
                dishesLoading={props.dishes.isLoading}
                dishesErrMess={props.dishes.errMess}
                leader={props.leaders.filter((leader) => leader.featured)[0]}   /> 
              {/*   <Home
                dish={dishes.filter((dish) => dish.featured)[0]}
                promotion={promotions.filter((promo) => promo.featured)[0]}
                leader={leaders.filter((leader) => leader.featured)[0]}   />  */}
        </React.Fragment>
    );
}