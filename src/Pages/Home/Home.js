import React from 'react';
import heroimage from '../../assets/Hero-background.jpg'

const Home = () => {
    return (
        <div className='grid mx-auto'>
            <p className='text-base mt-16 text-white container lg:w-[1200px] mx-auto '>W E L C O M E !</p>
            <br />
            <div className='container lg:w-[1200px] mx-auto text-5xl font-mod'>
                <h5 className='w-96 '>I elevate UX using telekinesis.</h5>
            </div>
            <br />
            <div>
                <img src={heroimage} alt=''></img>
            </div>
        </div>
    );
};

export default Home;