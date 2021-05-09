import React, {useEffect} from 'react';


function UserData( { userData, routeId, onGetUserData } ) {

    useEffect(() => {

        routeId === 2 && onGetUserData();

    }, [routeId])

    return(
        <div className="user-data">
            <h1> {userData.name} </h1>
            <p> {userData.points} </p>
        </div>
    )
}


export default UserData;