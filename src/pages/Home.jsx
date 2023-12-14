import React from 'react';
import Hero from '../components/HomePageHero';
import Courses from '../components/Courses';

const Home = () => {
    return (
        <div className='text-'>
            <Hero />
            <Courses />
        </div>
    )
}

export default Home;