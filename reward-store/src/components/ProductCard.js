import React from 'react';


function ProductCard(props) {

    const { id, title, img, price, userPoints, handleRedeemProduct, routeId } = props


    return(
        <div className="product-card">
            <h3> {title} </h3>
            <img src={img} alt="product-img" />
            <p> {price} </p>
            { userPoints >= price &&
                <button value={id} onClick={handleRedeemProduct} >REDEEM</button>
            }
        </div>
    )
}


export default ProductCard;