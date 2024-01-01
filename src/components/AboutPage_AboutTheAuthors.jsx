import React from 'react';
import { Link } from 'react-router-dom';

// images
import playImg from '../assets/images/svg/play-button.svg';

const AboutPage_AboutTheAuthors = () => {
    return (
        <section className="pb-16 relative">
            <div className="container mb-15">
                {/* title */}
                <h2 className="restangle-shape before:mb-8 mb-5">
                    <span className="font-gilroy-medium font-medium">Biz Haqimizda</span>
                </h2>

                {/* description */}
                <p className="leading-7 tracking-5 text-center max-w-[812px] mx-auto">Ultrices volutpat nulla amet mi nisi. Suspendisse sem amet nunc mauris. At lacinia elementum </p>
            </div>

            {/* list */}
            <div className="container max-w-1150">
                <ul className="grid grid-cols-3 gap-x-20 gap-y-[70px] about-the-authors">
                    <li className='item w-full'>
                        <Link to='/' className='item-content' style={{ background: 'url(../src/assets/images/other/abdullayev-anvar.jpg)' }}    >
                            <span>2.02.2023</span>
                            <p className="text-orange">Lorem ipsum</p>
                            <h3>Abdullayev Anvar</h3>
                            <img width={80} height={80} src={playImg} alt="" className="play-btn" />
                        </Link>
                    </li>
                    <li className='item w-full'>
                        <Link to='/' className='item-content' style={{ background: 'url(../src/assets/images/other/abdullayev-anvar.jpg)' }}    >
                            <span>2.02.2023</span>
                            <p className="text-orange">Lorem ipsum</p>
                            <h3>Abdullayev Anvar</h3>
                            <img width={80} height={80} src={playImg} alt="" className="play-btn" />
                        </Link>
                    </li>
                    <li className='item w-full'>
                        <Link to='/' className='item-content' style={{ background: 'url(../src/assets/images/other/abdullayev-anvar.jpg)' }}    >
                            <span>2.02.2023</span>
                            <p className="text-orange">Lorem ipsum</p>
                            <h3>Abdullayev Anvar</h3>
                            <img width={80} height={80} src={playImg} alt="" className="play-btn" />
                        </Link>
                    </li>
                    <li className='item w-full'>
                        <Link to='/' className='item-content' style={{ background: 'url(../src/assets/images/other/abdullayev-anvar.jpg)' }}    >
                            <span>2.02.2023</span>
                            <p className="text-orange">Lorem ipsum</p>
                            <h3>Abdullayev Anvar</h3>
                            <img width={80} height={80} src={playImg} alt="" className="play-btn" />
                        </Link>
                    </li>
                    <li className='item w-full'>
                        <Link to='/' className='item-content' style={{ background: 'url(../src/assets/images/other/abdullayev-anvar.jpg)' }}    >
                            <span>2.02.2023</span>
                            <p className="text-orange">Lorem ipsum</p>
                            <h3>Abdullayev Anvar</h3>
                            <img width={80} height={80} src={playImg} alt="" className="play-btn" />
                        </Link>
                    </li>
                    <li className='item w-full'>
                        <Link to='/' className='item-content' style={{ background: 'url(../src/assets/images/other/abdullayev-anvar.jpg)' }}    >
                            <span>2.02.2023</span>
                            <p className="text-orange">Lorem ipsum</p>
                            <h3>Abdullayev Anvar</h3>
                            <img width={80} height={80} src={playImg} alt="" className="play-btn" />
                        </Link>
                    </li>   
                    <li className='item w-full'>
                        <Link to='/' className='item-content' style={{ background: 'url(../src/assets/images/other/abdullayev-anvar.jpg)' }}    >
                            <span>2.02.2023</span>
                            <p className="text-orange">Lorem ipsum</p>
                            <h3>Abdullayev Anvar</h3>
                            <img width={80} height={80} src={playImg} alt="" className="play-btn" />
                        </Link>
                    </li>
                    <li className='item w-full'>
                        <Link to='/' className='item-content' style={{ background: 'url(../src/assets/images/other/abdullayev-anvar.jpg)' }}    >
                            <span>2.02.2023</span> 
                            <p className="text-orange">Lorem ipsum</p>
                            <h3>Abdullayev Anvar</h3>
                            <img width={80} height={80} src={playImg} alt="" className="play-btn" />
                        </Link>
                    </li>
                    <li className='item w-full'>
                        <Link to='/' className='item-content' style={{ background: 'url(../src/assets/images/other/abdullayev-anvar.jpg)' }}    >
                            <span>2.02.2023</span>
                            <p className="text-orange">Lorem ipsum</p>
                            <h3>Abdullayev Anvar</h3>
                            <img width={80} height={80} src={playImg} alt="" className="play-btn" />
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    )
};

export default AboutPage_AboutTheAuthors;