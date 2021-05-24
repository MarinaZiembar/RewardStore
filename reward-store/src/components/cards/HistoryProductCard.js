import React from 'react';
import coin from '../../assets/images/coin.svg';



function HistoryProductCard(props) {

    const { title, img, price, timestamp } = props



    return(
        <div className="history-product-card">
            <img src={img} className="product-pic" alt="product-img" />
            <div className="details">
                <h3> {title} </h3>
                <div className="price">
                    <h5> {price} </h5>
                    <img src={coin} width="20" alt="product-img" />
                </div>
                <p> {timestamp} </p>
            </div>
        </div>
    )
}


export default HistoryProductCard;