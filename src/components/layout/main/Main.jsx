import React from 'react';
import Navigation from '../../share/navbar/Navigation';
import Allproduct from '../../home/allProduct/Allproduct';
import Footer from '../../share/footer/Footer';

const Main = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Allproduct></Allproduct>
            <Footer></Footer>
        </div>
    );
};

export default Main;