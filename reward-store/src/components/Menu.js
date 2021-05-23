import React from 'react';
import { Link } from 'react-router-dom';
import cog from '../assets/images/cog.svg';
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
            <button><img src={cog} width="30" alt="cog" /></button>
        </div>
    )
}


export default Menu;
