import React from 'react';
import tradingImg from '../assets/images/other/trading.png';

const HomePageAboutUs = () => {
    return (
        <section className='home-page-about-us-section'>
            <div className="container max-w-1260">
                {/* title & description */}
                <div className="mb-15">
                    {/* title */}
                    <h2 className="restangle-shape before:mb-8 mb-5">
                        <span className="font-gilroy-medium font-medium">Biz Haqimizda</span>
                    </h2>

                    {/* description */}
                    <p className="leading-7 tracking-5 text-center max-w-[812px] mx-auto">Ultrices volutpat nulla amet mi nisi. Suspendisse sem amet nunc mauris. At lacinia elementum </p>
                </div>

                {/* list */}
                <ul className="list">
                    <li className="list-item">
                        <img width={236} height={143} src={tradingImg} alt="this is trading image" className='image' />
                        <h3 className="title">Biz Haqimizda</h3>
                        <p className="description">Nunc varius et sapien aliquam sed feugiat diam nam tortor. Congue tempus quis facilisi lacus.</p>
                    </li>
                    <li className="list-item">
                        <img width={236} height={143} src={tradingImg} alt="this is trading image" className='image' />
                        <h3 className="title">Biz Haqimizda</h3>
                        <p className="description">Nunc varius et sapien aliquam sed feugiat diam nam tortor. Congue tempus quis facilisi lacus.</p>
                    </li>
                    <li className="list-item">
                        <img width={236} height={143} src={tradingImg} alt="this is trading image" className='image' />
                        <h3 className="title">Biz Haqimizda</h3>
                        <p className="description">Nunc varius et sapien aliquam sed feugiat diam nam tortor. Congue tempus quis facilisi lacus.</p>
                    </li>
                </ul>
            </div>
        </section>
    )
};

export default HomePageAboutUs;