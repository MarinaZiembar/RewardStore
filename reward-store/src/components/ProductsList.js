import React, {useEffect} from 'react';
import ProductCard from './ProductCard';


function ProductsList( { onGetProducts, onGetUserHistory, products, routeId } ) {

    useEffect(() => {

        routeId === 1 ? onGetProducts() : onGetUserHistory();

    }, [routeId])

    return(
        <div className="products-list">
            {
                products.map((product,i) => (
                    <ProductCard
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