import React, {useEffect} from 'react';
import user from '../assets/images/user.svg';


function UserData( { userData, routeId, onGetUserData, addedPoints} ) {
    

    useEffect(() => {

        routeId === 2 && onGetUserData();

    }, [routeId, addedPoints])



    return(
        <div className="user-data">
            <div className="user-card">
                <div className="img-user">
                    <img src={user} width="80" alt="user-pic"/>
                </div>
                <div className="user-info">
                    <h1> {userData.name} </h1>
                    <p> <strong>Points: </strong>{userData.points} </p>
                </div>
            </div>
            <h2>History</h2>
        </div>
    )
}


export default UserData;