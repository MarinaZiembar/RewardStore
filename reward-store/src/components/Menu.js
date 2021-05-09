import React from 'react';
import {Link} from 'react-router-dom';
import {routes} from '../utils/Routes';


function Menu( { onGetRouteId } ) {
    return(
        <div className="menu">
            {
                routes.map((route,i) =>(
                    <Link 
                        to={route.path}
                        key={i}
                        onClick={() => onGetRouteId(route.id)}
                    >
                        {route.label}
                    </Link>    
                ))
            }
        </div>
    )
}


export default Menu;