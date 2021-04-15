import React from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import FeaturedService from '../FeaturedService/FeaturedService';
import Services from '../Services/Services';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => (
    <div>
        <NavBar />
        <TopBanner />
        <Services />
        <FeaturedService />
    </div>
);

export default Home;
