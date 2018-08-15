import React, { Component } from 'react';
import { Menu } from './MenuComponent';
import { DishWithId } from './DishWithId';
import Contact from './ContactComponent';
import { HomePage } from './HomePageComponent';
import { About } from './AboutComponent';
import Header from './HeaderComponent';
import { Footer } from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { required, minLength, maxLength, validEmail } from '../shared/validationUtils';
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
     const { dishes, promotions, leaders, comments } = this.state;
     return (
      <div>
        <Header />
          <Switch>
              <Route path='/home' component={() => 
                   <HomePage dishes={dishes}  promotions={promotions} leaders={leaders}  />} /> 
              <Route exact path='/menu' component={() => <Menu dishes={dishes} />} />
              <Route exact path='/contactus' component={Contact} />} />
              <Route exact path='/aboutus' component={() => 
                   <About leaders={leaders}  />} /> 
              <Route path='/menu/:dishId' component={({match}) => 
                   <DishWithId dishes={dishes}  comments={comments} match={match}  />} />        
              <Redirect to="/home" />
          </Switch>        
        <Footer />
      </div>
    );
  }
}