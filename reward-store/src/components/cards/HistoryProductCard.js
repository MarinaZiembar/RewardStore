import React from 'react';


function HistoryProductCard(props) {

    const { title, img, price } = props


    return(
        <div className="history-product-card">
            <h3> {title} </h3>
            <img src={img} alt="product-img" />
            <p> {price} </p>
        </div>
    )
}


export default HistoryProductCard;