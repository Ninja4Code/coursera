import React, { Component } from 'react';
import Home from './HomeComponent';
import { Menu } from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { DISHES } from '../shared/dishes';

// This is a container component that houses the Navbar, Menu and DishDetail
// This component will contain the state for the application.
export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES
    };
  }
  render() {
     const { dishes } = this.state;
     const HomePage = () => {
        return(
          <Home 
          />
        );
     }
    return (
      <div>
        <Header />
          <Switch>
              <Route path='/home' component={HomePage} />
               {/* Define a route with parameters */}
              <Route exact path='/menu' component={() => <Menu dishes={dishes} />} />
              {/* Define a default route */}
              <Redirect to="/home" />
          </Switch>        
        <Footer />
      </div>
    );
  }
}