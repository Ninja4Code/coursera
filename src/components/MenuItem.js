import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';

export const MenuItem = ({dish, onClick}) => {
    const {id, image, name} = dish;
    return (
        <Card>
            <Link to={`/menu/${id}`} >
                {/* Menu images when we click on Menu page 
                    NOTE: baseUrl is pointing to the place on the json-server,
                            i.e. http://localhost:3001/assets/images
                            and c:\development\javascript\json-server\public\asset\images
                            where we are getting the images instead of within the project
                */}
                <CardImg width="100%" src={baseUrl + image} alt={name} />
                <CardImgOverlay>
                    <CardTitle>{name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}