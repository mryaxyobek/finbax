import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// img
import logoImg from '../assets/images/other/logo.png';

const Header = () => {
    return (
        <header className='pt-2.5 pb-1'>
            <div className="flex-center-between container">
                {/* logo */}
                <Link to='/'>
                    <img width={219} height={85} src={logoImg} alt="this is the site logo" className="w-219 h-85" />
                </Link>

                {/* navbar & register btn */}
                <div className="flex-center">
                    <nav className='mr-32'>
                        <ul className="flex-center space-x-12 text-regular-22">
                            <li>
                                <NavLink to='/'>Barcha kurslar</NavLink>
                            </li>
                            <li>
                                <NavLink to='/'>Biz haqimizda</NavLink>
                            </li>
                            <li>
                                <NavLink to='/'>Yangiliklar</NavLink>
                            </li>
                        </ul>
                    </nav>

                    {/* button */}
                    <Link to='/login' className='inline-block py-2 px-7 rounded-10 border-2 border-primary-blue-600 text-semibold-22'>Kirish</Link>
                </div>
            </div>
        </header>
    )
};

export default Header;