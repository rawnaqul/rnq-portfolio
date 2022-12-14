import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/Rawnaq--logo--light.png'
import './Navbar.css'

const Navbar = () => {

    const menuItem = <React.Fragment>
        <ul className='flex items-center text-white'>
            <li className='menu-link-mod'><a href='#section-ii'>Projects</a></li>
            <li className='menu-link-mod'><a href='https://drive.google.com/file/d/1FEZP6ZEfsfKjG2DC-fLKCPPMjjMZzFUl/view?usp=share_link' target="_blank" rel='noreferrer'>Resume</a></li>
            <li><a href='#section-cta' rel='noreferrer' className='menu-link-mod normal-case rounded-md bg-[#3D3D3D] hover:opacity-80'>Say Hi!</a></li>
        </ul>
    </React.Fragment>
    return (
        <div className='container mx-auto flex justify-between items-center lg:w-[1200px] py-3'>
            <div className=''>
                <img src={logo} alt='logo' className='w-3/5'></img>
            </div>
            <div className='text-sm'>
                {menuItem}
            </div>
        </div>
    );
};

export default Navbar;