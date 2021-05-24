import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../utils/Routes';



function Menu({onGetRouteId}) {

    return(
        <div className="menu">
            {
                routes?.map((route,i) =>(
                    <Link 
                        to={route.path}
                        key={i}
                        onClick={() => onGetRouteId(route.page_id)}
                    >
                        <img src={route.label} width="30" alt="icon" />
                    </Link>    
                ))
            }
        </div>
    )
}


export default Menu;
