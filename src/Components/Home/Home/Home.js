import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <WhyUs></WhyUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;