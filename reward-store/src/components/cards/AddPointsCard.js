import React from 'react';


function AddPointsCard(props) {

    const { img, label, text, value, width, handleOnClick } = props  

    return(
        <div className="add-points-card">
            <img src={img} width={width} alt="img" />
            <div className="details">
                <h3>{label}</h3>
                <p> {text} </p>
                <button
                    value={value}
                    onClick={handleOnClick}
                >
                    Add gems
                </button>
            </div>
        </div>
    )
}


export default AddPointsCard;