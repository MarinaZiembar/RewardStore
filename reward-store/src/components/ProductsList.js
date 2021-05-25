import React, { useEffect, useState } from 'react';
import ProductCard from './cards/ProductCard';
import HistoryProductCard from './cards/HistoryProductCard';
import ModalSuccess from './modals/ModalSuccess';
import ModalFailure from './modals/ModalFailure';
import usePagination from "../utils/Pagination";
import { Pagination } from "@material-ui/lab";
import { getDateTime } from '../utils/Date';



function ProductsList( { onGetProducts, onGetUserHistory, products, routeId, userData, onRedeemProduct, category, order, showSuccessModal, showFailureModal, onSetShowFailure, onSetShowSuccess} ) {


    useEffect(() => {

        routeId === 1 ? onGetProducts() : onGetUserHistory();

        _DATA.setCurrentPage(1);

    }, [routeId, category])



    const handleRedeemProduct = (value) => {
        onRedeemProduct(value);
    }


    const filteredProducts = category === "" ? products : products.filter(product => product.category === category);
     
    const finalProductsList =   order === "lower-price" ? filteredProducts.sort((a,b) => (a.cost - b.cost)) :
                                order === "higher-price" ? filteredProducts.sort((a,b) => (b.cost - a.cost)) :
                                filteredProducts;


    

    let [page, setPage] = useState(1);

    const itemsPerPage = 16;

    const count = Math.ceil(finalProductsList.length / itemsPerPage);
    let _DATA = usePagination(finalProductsList, itemsPerPage);

    let handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };                            

    return(
        <div className="products-list">
            { routeId === 1 ?
                _DATA.currentData().map((product,i) => (
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

            <Pagination
                count={count}
                size="large"
                page={page}
                variant="outlined"
                shape="rounded"
                onChange={handleChange}
            />


            <ModalSuccess
                showModal={showSuccessModal}
                handleHide={() => onSetShowSuccess(false)}
            />
            <ModalFailure
                showModal={showFailureModal} 
                handleHide={() => onSetShowFailure(false)}
            />
        </div>
    )
}


export default ProductsList;