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
import { postComment, postFeedback, fetchDishes, fetchComments, fetchPromos, fetchLeaders } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    leaders: state.leaders,
    promotions: state.promotions,
    comments: state.comments
  }    
}
const mapDispatchToProps = dispatch => ({ 
  postComment: (dishId, rating, author, comment) => {
    dispatch(postComment(dishId, rating, author, comment));    
  },
  fetchDishes:()=>{dispatch(fetchDishes())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders: () => dispatch(fetchLeaders()),
  postFeedback: (feedback) => {
    dispatch(postFeedback(feedback));    
  },
});
// This is a container component that houses the Navbar, Menu and DishDetail
// This component will contain the state for the application.
class Main  extends Component  { 
  constructor(props) {
    super(props);      
  }  
  componentDidMount(){
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();    
  }
  render() {
     const { dishes, promotions, leaders, comments, resetFeedbackForm, postComment, postFeedback } = this.props;     
     return (
      <div>
        <Header />
        <TransitionGroup>
            <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
              <Switch>
                <Route path='/home' component={() => 
                   <HomePage dishes={dishes}  promotions={promotions} leaders={leaders}  />} /> 
                <Route exact path='/menu' component={() => <Menu dishes={dishes} />} />
                <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={resetFeedbackForm} postFeedback={postFeedback}/>} />
                <Route exact path='/aboutus' component={() => 
                   <About leaders={leaders}  />} /> 
                <Route path='/menu/:dishId' component={({match}) => 
                   <DishWithId dishes={dishes} 
                    comments={comments} match={match} postComment={postComment}  />} />        
                <Redirect to="/home" />
              </Switch> 
            </CSSTransition>
          </TransitionGroup>       
        <Footer />
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));