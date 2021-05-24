import React from 'react';
import HeroCard from '../components/cards/HeroCard';
import ProductsContainer from '../containers/ProductsContainer';
import UserDataContainer from '../containers/UserDataContainer';


function Profile() {

    return(
        <div className="profile">
            <HeroCard title="My Profile" />
            <UserDataContainer />
            <ProductsContainer />
        </div>
    )
}


export default Profile;