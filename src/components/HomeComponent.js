import React from 'react';
import { RenderCard } from './RenderCard';

export const Home =(props) => {
    const { dish, promotion, leader, dishesLoading, dishesErrMess, 
            promoLoading, promoErrMess, leaderLoading, leaderErrMess } = props;
    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={dish} isLoading={dishesLoading} errMess={dishesErrMess} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={promotion} isLoading={promoLoading} errMess={promoErrMess} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={leader} isLoading={leaderLoading} errMess={leaderErrMess}/>
                </div>
            </div>
        </div>
    );
}