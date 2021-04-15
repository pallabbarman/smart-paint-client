import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';
import Contact from '../Contact/Contact';
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
        <Contact />
        <Footer />
    </div>
);

export default Home;
