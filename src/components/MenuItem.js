import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

export const MenuItem = ({dish, onClick}) => {
    return (
        <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}