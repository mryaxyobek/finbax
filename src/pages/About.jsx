import React, { useEffect } from 'react';
import AboutPageMainContent from '../components/AboutPageMainContent';
import FaqSection from '../components/FaqSection';
import AboutPage_AboutTheAuthors from '../components/AboutPage_AboutTheAuthors';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <AboutPageMainContent />
            <FaqSection />
            <AboutPage_AboutTheAuthors />
        </>
    )
};

export default About;