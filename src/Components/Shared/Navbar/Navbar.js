import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/Rawnaq--logo--light.png'
import './Navbar.css'

const Navbar = () => {
    const menuItem = <React.Fragment>
        <ul className='flex items-center text-white'>
            <li className='menu-link-mod'><Link>Projects</Link></li>
            <li className='menu-link-mod'><Link>Resume</Link></li>
            <li><Link className='menu-link-mod normal-case rounded-md bg-[#3D3D3D] hover:opacity-80'>Say Hi!</Link></li>
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