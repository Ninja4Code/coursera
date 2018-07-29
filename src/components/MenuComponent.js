import React from 'react';
import { MenuItem } from './MenuItem';

// This is a presentational component.  It will not maintain any state.
export const Menu = (props) => {
        // The menu variable will just contain the content for each Dish to be initially
        // displayed on the page.
        // We're using the map function to iterate through each Dish in the dishes array
        // The menu content will then be displayed in the first div under the container
        // div in the return statement.
        // NOTE: This does NOT display any detail!
        const menu = props.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1" key={dish.id}>
                   <MenuItem dish={dish}  />               
              </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>                          
            </div>
        );    
}