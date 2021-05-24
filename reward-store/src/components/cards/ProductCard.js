import React from 'react';
import whiteCoin from '../../assets/images/whiteCoin.svg';
import coin from '../../assets/images/coin.svg';


function ProductCard(props) {

    const { id, title, img, price, userPoints, handleRedeemProduct } = props


    return(
        <div className="product-card">
            <img src={img} alt="product-img" />
            <h3> {title} </h3>
            <div className="price">
                <p> {price} </p> 
                <img src={coin} className="img-coin" alt="product-img" />
            </div>
            { userPoints >= price ?
                <button value={id} onClick={handleRedeemProduct} >REDEEM</button> :
                <button className="inactive" value={id}> NEED {price - userPoints} <img src={whiteCoin} width="20" alt="product-img" /></button>
            }
        </div>
    )
}


export default ProductCard;