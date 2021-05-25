import React from 'react';
import order from '../assets/images/order.svg';
import filter from '../assets/images/filter.svg';


function Filters({ products, onGetCategory, onGetOrder }) {


    const categories = [
        ...new Set(products.map(product => product.category))
    ]



    return(
        <div className="filters">
            <div className="filter-by-category">
                <div className="filter-icon">
                    <img src={filter} width="25" alt="filter" />
                    <p>Filter</p>
                </div>
                <select
                    onChange={(e) => {
                        onGetCategory(e.target.value);
                    }}
                >
                    <option value="">
                        All products
                    </option>
                    {
                        categories.map((category,i) => (
                            <option 
                                value={category}
                                key={i}
                            >
                                {category}
                            </option>
                        ))
                    }
                </select>
            </div>
            <div className="order-by">
                <div className="filter-icon">
                    <img src={order} width="20" alt="order" />
                    <p>Order by</p>
                </div>
                <select
                    onChange={(e) => onGetOrder(e.target.value)}
                >
                    <option value="">
                        -
                    </option>
                    <option value="lower-price">
                        Lower price
                    </option>
                    <option value="higher-price">
                        Higher price
                    </option>
                </select>
            </div>
        </div>
    )
}


export default Filters;