import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// styles
import 'swiper/css';
import '../css/styles.css';
// modules
import { Link } from 'react-router-dom';
const AboutTheAuthors = () => {
    return (
        <section className="pt-50 pb-16 relative">
            {/* cirlce shape with blur effect */}
            <div className="blur-effect -left-52 -top-11"></div>
            <div className="blur-effect -right-[231px] top-48"></div>

            <div className="container mb-12">
                {/* title */}
                <h2 className="restangle-shape before:mb-8 mb-5">
                    <span className="font-gilroy-medium font-medium">Biz Haqimizda</span>
                </h2>

                {/* description */}
                <p className="leading-7 tracking-5 text-center max-w-[812px] mx-auto">Ultrices volutpat nulla amet mi nisi. Suspendisse sem amet nunc mauris. At lacinia elementum </p>
            </div>

            {/* list */}
            <div className="container max-w-max px-0">
                <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={40}
                    className="flex gap-10 about-the-authors"
                >

                    <SwiperSlide className='item' style={{ background: 'url(../src/assets/images/other/abdullayev-anvar.jpg)' }}>
                        <Link to='/' className='item-content'>
                            <span>2.02.2023</span>
                            <p className="text-orange">Lorem ipsum</p>
                            <h3>Abdullayev Anvar</h3>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide className='item' style={{ background: 'url(../src/assets/images/other/abdullayev-anvar.jpg)' }}>
                        <Link to='/' className='item-content'>
                            <span>2.02.2023</span>
                            <p className="text-orange">Lorem ipsum</p>
                            <h3>Abdullayev Anvar</h3>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide className='item' style={{ background: 'url(../src/assets/images/other/abdullayev-anvar.jpg)' }}>
                        <Link to='/' className='item-content'>
                            <span>2.02.2023</span>
                            <p className="text-orange">Lorem ipsum</p>
                            <h3>Abdullayev Anvar</h3>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide className='item' style={{ background: 'url(../src/assets/images/other/abdullayev-anvar.jpg)' }}>
                        <Link to='/' className='item-content'>
                            <span>2.02.2023</span>
                            <p className="text-orange">Lorem ipsum</p>
                            <h3>Abdullayev Anvar</h3>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide className='item' style={{ background: 'url(../src/assets/images/other/abdullayev-anvar.jpg)' }}>
                        <Link to='/' className='item-content'>
                            <span>2.02.2023</span>
                            <p className="text-orange">Lorem ipsum</p>
                            <h3>Abdullayev Anvar</h3>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide className='item' style={{ background: 'url(../src/assets/images/other/abdullayev-anvar.jpg)' }}>
                        <Link to='/' className='item-content'>
                            <span>2.02.2023</span>
                            <p className="text-orange">Lorem ipsum</p>
                            <h3>Abdullayev Anvar</h3>
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
};

export default AboutTheAuthors;