import React from 'react';
import Hero from '../components/HomePageHero';
import Courses from '../components/Courses';
import FreeCourses from '../components/FreeCourses';

const Home = () => {
    return (
        <div className='text-'>
            <Hero />
            <Courses />
            <FreeCourses />
        </div>
    )
}

export default Home;