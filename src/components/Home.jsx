import React from 'react';
import Banner from './Banner';
import Categorylist from './Categorylist';
import Featuresjob from './Featuresjob';


const Home = () => {
    return (
    
        <div>
            <Banner/>
            <Categorylist/>
            <Featuresjob/>
            <h2>This is Home</h2>
        </div>
    );
};

export default Home;