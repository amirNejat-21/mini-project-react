import React from 'react';
import Banner from './Banner';
import Cards from './Cards';
import Search from './Search';
import Logos from './Logos';

const Landing = () => {
    return (
        <div>
             <Banner/>
             <Cards/>
             <Search/>
             <Logos/>
        </div>
    );
};

export default Landing;