import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import DishDetail from './DishDetailComponent';

export default class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }
    // this event merely sets the selected dish so that the detail component
    // can display the dish details
    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }
    render() {
        // The menu variable will just contain the content for each Dish to be initially
        // displayed on the page.
        // We're using the map function to iterate through each Dish in the dishes array
        // The menu content will then be displayed in the first div under the container
        // div in the return statement.
        // NOTE: This does NOT display any detail!
        const menu = this.props.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                  onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
         <DishDetail dish={this.state.selectedDish} />               
            </div>
        );
    }
}