import React from 'react';
import ProductsContainer from '../containers/ProductsContainer';
import UserDataContainer from '../containers/UserDataContainer';

function Profile() {

    return(
        <div className="profile">
            <UserDataContainer />
            <ProductsContainer />
        </div>
    )
}


export default Profile;