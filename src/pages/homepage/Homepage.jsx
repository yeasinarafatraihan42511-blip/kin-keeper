import React from 'react';
import Banner from '../../components/Banner/Banner';
import SummmaryCard from '../../components/SummaryCard/SummmaryCard';
import Friend from '../friends/Friend';


const Homepage = () => {
    return (
        <div>
            <Banner />
            <SummmaryCard />
            <Friend />  

        </div>
    );
};

export default Homepage;