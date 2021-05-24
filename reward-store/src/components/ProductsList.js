import React, { useEffect, useState } from 'react';
import ProductCard from './cards/ProductCard';
import HistoryProductCard from './cards/HistoryProductCard';
import ModalSuccess from './modals/ModalSuccess';
import ModalFailure from './modals/ModalFailure';
import { getDateTime } from '../utils/Date';



function ProductsList( { onGetProducts, onGetUserHistory, products, routeId, userData, onRedeemProduct, category, order, redeemSuccess, redeemError } ) {

    useEffect(() => {

        routeId === 1 ? onGetProducts() : onGetUserHistory();

    }, [routeId, category])


    const [showSuccess, setShowSuccess] = useState(false);
    const [showFailure, setShowFailure] = useState(false);

    
    const handleRedeemProduct = (value) => {
        onRedeemProduct(value);
        redeemSuccess && setShowSuccess(true);
        redeemError && setShowFailure(true);
    }


    const filteredProducts = category === "" ? products : products.filter(product => product.category === category);
     
    const finalProductsList =   order === "lower-price" ? filteredProducts.sort((a,b) => (a.cost - b.cost)) :
                                order === "higher-price" ? filteredProducts.sort((a,b) => (b.cost - a.cost)) :
                                filteredProducts;

    

    return(
        <div className="products-list">
            { routeId === 1 ?
                finalProductsList.map((product,i) => (
                    <ProductCard
                        id={product._id}
                        routeId={routeId}
                        title={product.name}
                        img={product.img.url}
                        price={product.cost}
                        userPoints={userData.points}
                        handleRedeemProduct={(e) => handleRedeemProduct(e.target.value)}
                        key={i}
                    />    
                ))
                : products.map((product,i) => (
                    <HistoryProductCard
                        title={product.name}
                        img={product.img.url}
                        price={product.cost}
                        timestamp={getDateTime(product.createDate)}
                        key={i}
                    />    
                ))
            }
            <ModalSuccess
                show={showSuccess}
                handleHide={() => setShowSuccess(false)}
            />
            <ModalFailure
                show={showFailure} 
                handleHide={() => setShowFailure(false)}
            />
        </div>
    )
}


export default ProductsList;