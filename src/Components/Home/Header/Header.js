import React from 'react';
import TopNavbar from '../../Shared/TopNavbar/TopNavbar';
import About from '../About/About';
import HeaderMain from '../HeaderMain/HeaderMain';

const Header = () => {
    return (
        <div>
            <TopNavbar></TopNavbar>
            <HeaderMain></HeaderMain>
            <About></About>
        </div>
    );
};

export default Header;