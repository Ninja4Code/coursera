import React, { Component } from 'react';
import { Menu } from './MenuComponent';
import { DishWithId } from './DishWithId';
import Contact from './ContactComponent';
import { HomePage } from './HomePageComponent';
import { About } from './AboutComponent';
import Header from './HeaderComponent';
import { Footer } from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
//import { addComment } from '../redux/ActionCreators';
import { addComment, fetchDishes } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    leaders: state.leaders,
    promotions: state.promotions,
    comments: state.comments
  }    
}
const mapDispatchToProps = dispatch => ({  
  addComment: (dishId, rating, author, comment) => {
    dispatch(addComment(dishId, rating, author, comment));
    //console.log("Add comment event called");
  },
  fetchDishes:()=>{dispatch(fetchDishes())}
});
// This is a container component that houses the Navbar, Menu and DishDetail
// This component will contain the state for the application.
class Main  extends Component  { 
  constructor(props) {
    super(props);      
  }  
  componentDidMount(){
    this.props.fetchDishes();
  }
  render() {
     const { dishes, promotions, leaders, comments } = this.props;
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
                   <DishWithId dishes={dishes} 
                    comments={comments} match={match} addComment={this.props.addComment}  />} />        
              <Redirect to="/home" />
          </Switch>        
        <Footer />
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));