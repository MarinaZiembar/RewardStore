import React, {useEffect} from 'react';
import logo from '../assets/images/logo.svg';
import gem from '../assets/images/gem.svg';


function Menu( { onGetRouteId, onGetUserData, addedPoints, userData, redeemProduct, products } ) {

    useEffect(() => {

        onGetUserData();

    }, [addedPoints, redeemProduct])

    // const categories = [
    //     ...new Set(products.map(product => product.category))
    // ]

    return(
        <div className="header">
            <div className="top">
                <img src={logo} width="85" alt="logo" />
                <div className="points-container">
                    <h3>Ahoy, {userData.name}!</h3>
                    <aside>
                        <p> {userData.points} </p>
                        <img src={gem} width="25" alt="logo" />
                    </aside>
                </div>
            </div>
        </div>
    )
}


export default Menu;