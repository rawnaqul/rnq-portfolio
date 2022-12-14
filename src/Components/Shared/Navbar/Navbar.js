import React from 'react';
import logo from '../../../assets/Rawnaq--logo--light.png';
import './Navbar.css';
import { Link, animateScroll as scroll } from "react-scroll";


const Navbar = () => {

    const menuItem = <React.Fragment>
        <ul className='flex items-center text-white'>
            <li className='menu-link-mod hover:text-blue-400 hover:text-opacity-90 transition duration-300 ease-out'>
                <Link href='#section-ii'
                    activeClass="active"
                    to="section-ii"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={700}>Projects</Link>
            </li>
            <li>
                <Link
                    activeClass="active"
                    to=""
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={700}>Blog</Link>
            </li>
            <li className='menu-link-mod hover:text-blue-400 hover:text-opacity-90 transition duration-300 ease-out'>
                <a href='https://drive.google.com/file/d/1FEZP6ZEfsfKjG2DC-fLKCPPMjjMZzFUl/view?usp=share_link' target="_blank" rel='noreferrer'>Resume</a>
            </li>
            <li>
                <Link href='#section-cta' rel='noreferrer' className='menu-link-mod normal-case rounded-md bg-[#3D3D3D] hover:opacity-80 transition duration-300 ease-out'
                    activeClass="active"
                    to="section-cta"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={700}
                >Say Hi!</Link>
            </li>
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