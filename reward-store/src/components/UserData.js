import React, {useEffect} from 'react';


function UserData( { userData, routeId, onGetUserData, addedPoints, onAddPoints} ) {
    

    useEffect(() => {

        routeId === 2 && onGetUserData();

    }, [routeId, addedPoints])


    const handleOnClick = (value) => {
        onAddPoints(value);
    }

    return(
        <div className="user-data">
            <h1> {userData.name} </h1>
            <p> {userData.points} </p>
            <button value="1000" onClick={(e) => handleOnClick(e.target.value)}>Agregar 1000</button>
            <button value="5000" onClick={(e) => handleOnClick(e.target.value)}>Agregar 5000</button>
            <button value="7500" onClick={(e) => handleOnClick(e.target.value)}>Agregar 7500</button>
        </div>
    )
}


export default UserData;