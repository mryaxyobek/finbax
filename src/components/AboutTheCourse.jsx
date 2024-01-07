import React from 'react';

const AboutTheCourse = () => {
    return (
        <section className="pt-10 pb-20 about-the-course_section">
            <div className="container max-w-7xl">
                <h2 className="restangle-shape before:mb-8 mb-[104px]">
                    <span className="font-gilroy-medium font-medium ">Kursdan Nima Olasiz?</span>
                </h2>

                {/* list */}
                <ol className="list grid grid-cols-3">
                    <li className="list-item">
                        <span className="list-item-number">01</span>
                        <p className="list-item-body">Mi risus pulvinar tellus aliquam eu amet, urna blandit duis arcu fermentum amet, urna</p>
                    </li>
                    <li className="list-item">
                        <span className="list-item-number">02</span>
                        <p className="list-item-body">Mi risus pulvinar tellus aliquam eu amet, urna blandit duis arcu fermentum amet, urna</p>
                    </li>
                    <li className="list-item">
                        <span className="list-item-number">03</span>
                        <p className="list-item-body">Mi risus pulvinar tellus aliquam eu amet, urna blandit duis arcu fermentum amet, urna</p>
                    </li>
                    <li className="list-item">
                        <span className="list-item-number">04</span>
                        <p className="list-item-body">Mi risus pulvinar tellus aliquam eu amet, urna blandit duis arcu fermentum amet, urna</p>
                    </li>
                    <li className="list-item">
                        <span className="list-item-number">05</span>
                        <p className="list-item-body">Mi risus pulvinar tellus aliquam eu amet, urna blandit duis arcu fermentum amet, urna</p>
                    </li>
                    <li className="list-item">
                        <span className="list-item-number">06</span>
                        <p className="list-item-body">Mi risus pulvinar tellus aliquam eu amet, urna blandit duis arcu fermentum amet, urna</p>
                    </li>
                </ol>
            </div>
        </section>
    )
};

export default AboutTheCourse;