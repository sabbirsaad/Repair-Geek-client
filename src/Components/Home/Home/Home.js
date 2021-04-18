import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import WhyUs from '../WhyUs/WhyUs';
import Testimonial from '../Testimonial/Testimonial';
import Workshop from '../Workshop/Workshop';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <WhyUs></WhyUs>
            <Workshop></Workshop>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;