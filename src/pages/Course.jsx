import React from 'react';
import CoursePageHero from '../components/CoursePageHero';
import AboutTheCourse from '../components/AboutTheCourse';
import AboutTheAuthors from '../components/AboutTheAuthors';

const Course = () => {
    return (
        <>
            <CoursePageHero />
            <AboutTheCourse/>
            <AboutTheAuthors />
        </>
    )
};

export default Course;