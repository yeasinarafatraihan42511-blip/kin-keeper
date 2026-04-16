import React from 'react';

import Navbar from '../components/Shared/navbar/Navbar';
import Footer from '../components/Shared/navbar/footer/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet/>
            <Footer />
        </div>
    );
};

export default MainLayout;