import React from 'react';


function ProductCard(props) {

    const { title, img, price } = props

    return(
        <div className="product-card">
            <h3> {title} </h3>
            <img src={img} alt="product-img" />
            <p> {price} </p>
        </div>
    )
}


export default ProductCard;