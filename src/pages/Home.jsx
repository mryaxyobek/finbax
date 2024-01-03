import React, { useEffect } from 'react';
import Hero from '../components/HomePageHero';
import Courses from '../components/Courses';
import FreeCourses from '../components/FreeCourses';
import PayInInstallments from '../components/PayInInstallments';
import AboutTheAuthors from '../components/AboutTheAuthors';
import HomePageAboutUs from '../components/HomePageAboutUs';
import FaqSection from '../components/FaqSection';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='text-'>
            <Hero />
            <Courses />
            <FreeCourses />
            <PayInInstallments />
            <AboutTheAuthors />
            <HomePageAboutUs />
            <FaqSection />
        </div>
    )
}

export default Home;