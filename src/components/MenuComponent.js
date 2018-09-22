import React from 'react';
import { MenuItem } from './MenuItem';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';

// This is a presentational component.  It will not maintain any state.
export const Menu = (props) => {
        // The menu variable will just contain the content for each Dish to be initially
        // displayed on the page.
        // We're using the map function to iterate through each Dish in the dishes array
        // The menu content will then be displayed in the first div under the container
        // div in the return statement.
        // NOTE: This does NOT display any detail!
        const {dishes, isLoading} = props;
        const menu = dishes.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1" key={dish.id}>
                   <MenuItem dish={dish}  />               
              </div>
            );
        });
        if(isLoading){
            return (
              <div className="container">
                <div className="row">
                   <Loading />
                </div>
              </div>
            );
        } else if(dishes.errMess){
            return (
                <div className="container">
                  <div className="row">
                     <h4>{dishes.errMess}</h4>
                  </div>
                </div>
              );
            } else {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        );  
        }  
}