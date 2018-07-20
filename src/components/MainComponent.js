import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Menu } from './MenuComponent';
import { DishDetail } from './DishDetailComponent';
import { DISHES } from '../shared/dishes';

// This is a container component that houses the Navbar, Menu and DishDetail
// This component will contain the state for the application.
export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        selectedDish: null
    };
  }
  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }
  render() {
     const { dishes, selectedDish } = this.state;
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={dishes} 
            onClick={(dishId) => this.onDishSelect(dishId)} />
        <DishDetail dish={dishes.filter(
            (dish) => dish.id === selectedDish)[0]} />
      </div>
    );
  }
}