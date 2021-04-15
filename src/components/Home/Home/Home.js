import React from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import FeaturedService from '../FeaturedService/FeaturedService';
import Features from '../Features/Features';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => (
    <div>
        <NavBar />
        <TopBanner />
        <Services />
        <FeaturedService />
        <Testimonials />
        <Features />
    </div>
);

export default Home;
