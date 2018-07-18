import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

// This is a presentational component.  It will not maintain any state
export default class DishDetail extends Component {
    constructor(props) {
        super(props);        
    }
    // this event checks to see that a dish object exists in props
    // if so, it will render the dish detail in Card components
    // NOTE: this event always gets invoked from the Render event
    renderDish(dish) {
        if (dish) {
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return(
                <div></div>
            );
        }
    }
    // this event will render all comments for a selected dish
    // first we need to validate that there is actually a selected dish to deal with
    // and we also need to validate that there are comments associated with the dish
    // then we just iterate through the comments array and display appropriate 
    // comment information
    // if a selected dish isn't available or we don't have any comments for the dish
    // just render an empty div
    renderComments() {
        const { dish } = this.props;             
        if(dish && dish.comments !== null) {
            const {comments} = dish;            
            const commentList = comments.map((x,i) => {                       
                return (  
                    <ul className="list-unstyled" key={i}>
                        <li>{x.comment}</li>                        
                        <li>&#45;&#45; {x.author}, {x.date.substr(0, 10)}</li> 
                    </ul>          
                  );
                }); 
            return (
                <div>
                  <h4>Comments</h4>
                  {commentList} 
                </div>             
            );                                
        } else { 
           return (
              <div></div>                
           );
        }
    }
    render() {        
        return (
            <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                      {this.renderDish(this.props.dish)}
                  </div>
                  <div  className="col-12 col-md-5 m-1">
                      {this.renderComments()}
                  </div>
            </div>
        );
    }
}