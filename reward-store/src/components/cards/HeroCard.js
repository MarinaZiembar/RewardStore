import React from 'react';


function HeroCard(props) {

    const { title } = props

    return(
        <div className="hero-card" id="hero">
            <h1> {title} </h1>
        </div>
    )
}


export default HeroCard;