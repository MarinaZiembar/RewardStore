import React, { useEffect, useState } from 'react';
import ModalAddPoints from './modals/ModalAddPoints';
import logo from '../assets/images/logo.svg';
import gem from '../assets/images/gem.svg';


function Header( { onGetUserData, addedPoints, userData, redeemProduct, onAddPoints } ) {

    useEffect(() => {

        onGetUserData();

    }, [addedPoints, redeemProduct])

    
    const [show, setShow] = useState(false);

    return(
        <div className="header">
            <div className="top">
                <img src={logo} width="190" alt="logo" />
                <div className="points-container">
                    <h3>Ahoy, {userData.name}!</h3>
                    <aside onClick={() => setShow(true)} >
                        <p> {userData.points} </p>
                        <img src={gem} width="25" alt="coin" />
                    </aside>
                </div>
            </div>
            <ModalAddPoints 
                handleOnShow={() => setShow(false)} 
                handleOnCardClick={(e) => {onAddPoints(e.target.value); setShow(false)}}
                show={show}
            />
        </div>
    )
}


export default Header;