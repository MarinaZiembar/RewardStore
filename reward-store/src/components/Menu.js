import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {routes} from '../utils/Routes';


function Menu( { onGetRouteId, onGetUserData, addedPoints, userData, redeemProduct } ) {

    useEffect(() => {

        onGetUserData();

    }, [addedPoints, redeemProduct])

    return(
        <div className="menu">
            {
                routes?.map((route,i) =>(
                    <Link 
                        to={route.path}
                        key={i}
                        onClick={() => onGetRouteId(route.page_id)}
                    >
                        {route.label}
                    </Link>    
                ))
            }

            <h5> {userData.name} </h5>
            <p> {userData.points} </p>

        </div>
    )
}


export default Menu;