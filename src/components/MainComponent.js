import React, { Component } from 'react';
import Home from './HomeComponent';
import { Menu } from './MenuComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

// This is a container component that houses the Navbar, Menu and DishDetail
// This component will contain the state for the application.
export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        comments: COMMENTS,
        promotions: PROMOTIONS,
        leaders: LEADERS
    };
  }
  render() {
     const { dishes, promotions, leaders } = this.state;
     const HomePage = () => {
      return(
          <Home 
              dish={dishes.filter((dish) => dish.featured)[0]}
              promotion={promotions.filter((promo) => promo.featured)[0]}
              leader={leaders.filter((leader) => leader.featured)[0]}
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
              <Route exact path='/contactus' component={Contact} />} />
              {/* Define a default route */}
              <Redirect to="/home" />
          </Switch>        
        <Footer />
      </div>
    );
  }
}