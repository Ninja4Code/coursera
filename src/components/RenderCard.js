import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import {Loading} from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

export const RenderCard = (props) => {
    const { item, isLoading, errMess } = props;    
    if(isLoading){
        return (
          <Loading />
        );
    } else if (errMess) {
        return (
            <h4>{errMess}</h4>
        );
    } else {
       return ( 
          <Card>
            {/* Home Page promotional images of dishes on the Home page 
                 NOTE: baseUrl is pointing to the place on the json-server,
                            i.e. http://localhost:3001/assets/images
                            and c:\development\javascript\json-server\public\asset\images
                            where we are getting the images instead of within the project
            */}
            <CardImg src={baseUrl + item.image} alt={item.name} />            
            <CardBody>
            <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
            <CardText>{item.description}</CardText>
            </CardBody>
          </Card>     
        ); 
    }   
}