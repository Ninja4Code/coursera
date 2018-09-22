import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

export const MenuItem = ({dish, onClick}) => {
    const {id, image, name} = dish;
    return (
        <Card>
            <Link to={`/menu/${id}`} >
                <CardImg width="100%" src={image} alt={name} />
                <CardImgOverlay>
                    <CardTitle>{name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}