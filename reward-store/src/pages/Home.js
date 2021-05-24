import React from 'react';
import HeroCard from '../components/cards/HeroCard';
import ProductsContainer from '../containers/ProductsContainer';
import FiltersContainer from '../containers/FiltersContainer';


function Home() {
    return(
        <div className="home">
            <HeroCard title="Rewards" />
            <FiltersContainer />
            <ProductsContainer />
        </div>
    )
}


export default Home;