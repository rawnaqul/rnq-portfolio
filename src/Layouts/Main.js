import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Shared/Footer/Footer';
import Navbar from '../Components/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div className='text-3xl bg-[#161616]'>
            <div className='bg-black'>
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;