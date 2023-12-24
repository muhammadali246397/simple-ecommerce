import React from 'react';
import Navigation from '../../share/navbar/Navigation';
import Allproduct from '../../pages/allProduct/Allproduct';
import Footer from '../../share/footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navigation></Navigation>
           <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;