import React from 'react';
import Cta from '../../Components/Cta/Cta';
import HeroSection from '../../Components/HeroSection/HeroSection';
import Projects from '../../Components/Projrcts/Projects';


const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Projects></Projects>
            <Cta></Cta>
        </div>
    );
};

export default Home;