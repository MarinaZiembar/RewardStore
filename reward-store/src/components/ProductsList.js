import React, {useEffect} from 'react';
import ProductCard from './ProductCard';
import HistoryProductCard from './HistoryProductCard';


function ProductsList( { onGetProducts, onGetUserHistory, products, routeId, userData, onRedeemProduct } ) {

    useEffect(() => {

        routeId === 1 ? onGetProducts() : onGetUserHistory();

    }, [routeId])

    
    const handleRedeemProduct = (value) => {
        onRedeemProduct(value);
    }

    return(
        <div className="products-list">
            { routeId === 1 ?
                products.map((product,i) => (
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
                        key={i}
                    />    
                ))
            }
        </div>
    )
}


export default ProductsList;