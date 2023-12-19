import React from 'react';
import Hero from '../components/HomePageHero';
import Courses from '../components/Courses';
import FreeCourses from '../components/FreeCourses';
import PayInInstallments from '../components/PayInInstallments';

const Home = () => {
    return (
        <div className='text-'>
            <Hero />
            <Courses />
            <FreeCourses />
            <PayInInstallments />
        </div>
    )
}

export default Home;