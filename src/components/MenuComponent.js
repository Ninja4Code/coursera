import React from 'react';
//import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import {MenuItem} from './MenuItem';
/*function RenderMenuItem ({dish, onClick}) {
    return (
        <Card
            onClick={() => onClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}*/
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
              <div  className="col-12 col-md-5 m-1">
                   <MenuItem dish={dish} onClick={props.onClick} />               
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
//export default Menu;