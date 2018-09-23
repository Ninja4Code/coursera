import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import CommentForm from './CommentForm';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

    // This is a presentational component.  It will not maintain any state
    // this event checks to see that a dish object exists in props
    // if so, it will render the dish detail in Card components
    // NOTE: this event always gets invoked from the Render event    
    // this event will render all comments for a selected dish
    // first we need to validate that there is actually a selected dish to deal with
    // and we also need to validate that there are comments associated with the dish
    // then we just iterate through the comments array and display appropriate 
    // comment information
    // if a selected dish isn't available or we don't have any comments for the dish
    // just render an empty div    
    export const DishDetail = (props) => {
        const {isLoading, errMess, dish, comments, addComment} = props;
        const renderDish = (dish={}) => {
            return (
                    <Card>
                       {/* These are the menu images that display when we click
                            when we click on a specific menu item, i.e.
                            http://localhost:3000/menu/0 
                            NOTE: baseUrl is pointing to the place on the json-server,
                            i.e. http://localhost:3001/assets/images
                            and c:\development\javascript\json-server\public\asset\images
                            where we are getting the images instead of within the project
                        */}
                        <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                        <CardBody>
                          <CardTitle>{dish.name}</CardTitle>
                          <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
            );           
        }
        const renderComments = (comments={}, addComment) => {
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
                      <CommentForm addComment={addComment} dishId={props.dish.id} />
                    </div>             
                );          
        }
        if(isLoading){
            return (
              <div className="container">
                <div className="row">
                   <Loading />
                </div>
              </div>
            );
        } else if(errMess){
            return (
                <div className="container">
                  <div className="row">
                     <h4>{errMess}</h4>
                  </div>
                </div>
              );
        } else  if(dish !== null){
        return (            
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">                  
                    <div  className="col-12 col-md-5 m-1">
                        {renderDish(dish)}
                    </div>
                    <div  className="col-12 col-md-5 m-1">
                        {renderComments(comments, addComment)} 
                    </div>
                </div>
            </div>
        );   } else {
            return (
               <div>No Dish to Render</div>
            );
        } 
}