import React from 'react';
import CoursePageHero from '../components/CoursePageHero';
import AboutTheCourse from '../components/AboutTheCourse';
import AboutTheAuthors from '../components/AboutTheAuthors';
import OrderACourse from '../components/OrderACourse';

const Course = () => {
    return (
        <>
            <CoursePageHero />
            <AboutTheCourse />
            <AboutTheAuthors />
            <OrderACourse />
        </>
    )
};

export default Course;