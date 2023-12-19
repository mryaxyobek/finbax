import React from 'react';

// img
import beehive_before from '../assets/images/svg/beehive-2.svg';
import beehive_after from '../assets/images/svg/beehive.svg';
import { Link } from 'react-router-dom';

const Courses = () => {
    return (
        <section className='pt-9 pb-50'>
            <div className="container">
                <h2 className="restangle-shape before:mb-8 mb-10"><span><span className="font-gilroy-medium font-medium">Bizning</span> Kurslar.</span></h2>

                {/* courses */}
                <ul className="grid grid-cols-3 gap-9">
                    <li>
                        <Link className="flex flex-col relative overflow-hidden h-280 rounded-20 pt-60 px-8 pb-5 bg-[#437C90]" to='/'>
                            {/* title */}
                            <h3 className="text-bold-30 max-w-170 mb-auto">Lorem ipsum dolor sit.</h3>
                            {/* author name */}
                            <p>Azizov Anvar</p>
                            {/* bg images */}
                            <img
                                width={224}
                                height={224}
                                src={beehive_before}
                                alt=""
                                aria-hidden='true'
                                className="absolute w-56 h-56 z-0 -rotate-75 -top-12 -left-11"
                            />
                            <img
                                width={224}
                                height={224}
                                src={beehive_after}
                                alt=""
                                aria-hidden='true'
                                className="absolute w-56 h-56 z-0 rotate-102 -right-14 -bottom-7"
                            />
                        </Link>
                    </li>

                    <li>
                        <Link className="flex flex-col relative overflow-hidden h-280 rounded-20 pt-60 px-8 pb-5 bg-[#D64933]" to='/'>
                            {/* title */}
                            <h3 className="text-bold-30 max-w-170 mb-auto">Lorem ipsum dolor sit.</h3>
                            {/* author name */}
                            <p>Azizov Anvar</p>
                            {/* bg images */}
                            <img
                                width={224}
                                height={224}
                                src={beehive_before}
                                alt=""
                                aria-hidden='true'
                                className="absolute w-56 h-56 z-0 -rotate-75 -top-12 -left-11"
                            />
                            <img
                                width={224}
                                height={224}
                                src={beehive_after}
                                alt=""
                                aria-hidden='true'
                                className="absolute w-56 h-56 z-0 rotate-102 -right-14 -bottom-7"
                            />
                        </Link>
                    </li>

                    <li>
                        <Link className="flex flex-col relative overflow-hidden h-280 rounded-20 pt-60 px-8 pb-5 bg-[#005FF9]" to='/'>
                            {/* title */}
                            <h3 className="text-bold-30 max-w-170 mb-auto">Lorem ipsum dolor sit.</h3>
                            {/* author name */}
                            <p>Azizov Anvar</p>
                            {/* bg images */}
                            <img
                                width={224}
                                height={224}
                                src={beehive_before}
                                alt=""
                                aria-hidden='true'
                                className="absolute w-56 h-56 z-0 -rotate-75 -top-12 -left-11"
                            />
                            <img
                                width={224}
                                height={224}
                                src={beehive_after}
                                alt=""
                                aria-hidden='true'
                                className="absolute w-56 h-56 z-0 rotate-102 -right-14 -bottom-7"
                            />
                        </Link>
                    </li>


                    <li>
                        <Link className="flex flex-col relative overflow-hidden h-280 rounded-20 pt-60 px-8 pb-5 bg-[#01BAEF]" to='/'>
                            {/* title */}
                            <h3 className="text-bold-30 max-w-170 mb-auto">Lorem ipsum dolor sit.</h3>
                            {/* author name */}
                            <p>Azizov Anvar</p>
                            {/* bg images */}
                            <img
                                width={224}
                                height={224}
                                src={beehive_before}
                                alt=""
                                aria-hidden='true'
                                className="absolute w-56 h-56 z-0 -rotate-75 -top-12 -left-11"
                            />
                            <img
                                width={224}
                                height={224}
                                src={beehive_after}
                                alt=""
                                aria-hidden='true'
                                className="absolute w-56 h-56 z-0 rotate-102 -right-14 -bottom-7"
                            />
                        </Link>
                    </li>

                    <li>
                        <Link className="flex flex-col relative overflow-hidden h-280 rounded-20 pt-60 px-8 pb-5 bg-[#70A288]" to='/'>
                            {/* title */}
                            <h3 className="text-bold-30 max-w-170 mb-auto">Lorem ipsum dolor sit.</h3>
                            {/* author name */}
                            <p>Azizov Anvar</p>
                            {/* bg images */}
                            <img
                                width={224}
                                height={224}
                                src={beehive_before}
                                alt=""
                                aria-hidden='true'
                                className="absolute w-56 h-56 z-0 -rotate-75 -top-12 -left-11"
                            />
                            <img
                                width={224}
                                height={224}
                                src={beehive_after}
                                alt=""
                                aria-hidden='true'
                                className="absolute w-56 h-56 z-0 rotate-102 -right-14 -bottom-7"
                            />
                        </Link>
                    </li>

                    <li>
                        <Link className="flex flex-col relative overflow-hidden h-280 rounded-20 pt-60 px-8 pb-5 bg-[#67597A]" to='/'>
                            {/* title */}
                            <h3 className="text-bold-30 max-w-170 mb-auto">Lorem ipsum dolor sit.</h3>
                            {/* author name */}
                            <p>Azizov Anvar</p>
                            {/* bg images */}
                            <img
                                width={224}
                                height={224}
                                src={beehive_before}
                                alt=""
                                aria-hidden='true'
                                className="absolute w-56 h-56 z-0 -rotate-75 -top-12 -left-11"
                            />
                            <img
                                width={224}
                                height={224}
                                src={beehive_after}
                                alt=""
                                aria-hidden='true'
                                className="absolute w-56 h-56 z-0 rotate-102 -right-14 -bottom-7"
                            />
                        </Link>
                    </li>

                    <li>
                        <Link className="flex flex-col relative overflow-hidden h-280 rounded-20 pt-60 px-8 pb-5 bg-[#FA8334]" to='/'>
                            {/* title */}
                            <h3 className="text-bold-30 max-w-170 mb-auto">Lorem ipsum dolor sit.</h3>
                            {/* author name */}
                            <p>Azizov Anvar</p>
                            {/* bg images */}
                            <img
                                width={224}
                                height={224}
                                src={beehive_before}
                                alt=""
                                aria-hidden='true'
                                className="absolute w-56 h-56 z-0 -rotate-75 -top-12 -left-11"
                            />
                            <img
                                width={224}
                                height={224}
                                src={beehive_after}
                                alt=""
                                aria-hidden='true'
                                className="absolute w-56 h-56 z-0 rotate-102 -right-14 -bottom-7"
                            />
                        </Link>
                    </li>

                    <li>
                        <Link className="flex flex-col relative overflow-hidden h-280 rounded-20 pt-60 px-8 pb-5 bg-[#D64933]" to='/'>
                            {/* title */}
                            <h3 className="text-bold-30 max-w-170 mb-auto">Lorem ipsum dolor sit.</h3>
                            {/* author name */}
                            <p>Azizov Anvar</p>
                            {/* bg images */}
                            <img
                                width={224}
                                height={224}
                                src={beehive_before}
                                alt=""
                                aria-hidden='true'
                                className="absolute w-56 h-56 z-0 -rotate-75 -top-12 -left-11"
                            />
                            <img
                                width={224}
                                height={224}
                                src={beehive_after}
                                alt=""
                                aria-hidden='true'
                                className="absolute w-56 h-56 z-0 rotate-102 -right-14 -bottom-7"
                            />
                        </Link>
                    </li>

                    <li>
                        <Link className="flex flex-col relative overflow-hidden h-280 rounded-20 pt-60 px-8 pb-5 bg-[#005FF9]" to='/'>
                            {/* title */}
                            <h3 className="text-bold-30 max-w-170 mb-auto">Lorem ipsum dolor sit.</h3>
                            {/* author name */}
                            <p>Azizov Anvar</p>
                            {/* bg images */}
                            <img
                                width={224}
                                height={224}
                                src={beehive_before}
                                alt=""
                                aria-hidden='true'
                                className="absolute w-56 h-56 z-0 -rotate-75 -top-12 -left-11"
                            />
                            <img
                                width={224}
                                height={224}
                                src={beehive_after}
                                alt=""
                                aria-hidden='true'
                                className="absolute w-56 h-56 z-0 rotate-102 -right-14 -bottom-7"
                            />
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    )
};

export default Courses;