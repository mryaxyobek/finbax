import React from 'react';
import { Link } from 'react-router-dom';

// img
import logoImg from '../assets/images/other/logo.png';
import telephoneImg from '../assets/images/svg/telephone.svg';
import mailImg from '../assets/images/other/mail.png';
// social networks
import twitterImg from '../assets/images/svg/twitter.svg';
import facebookImg from '../assets/images/svg/facebook.svg';
import telegramImg from '../assets/images/svg/telegram.svg';
import instagramImg from '../assets/images/svg/instagram.svg';
// paymnets
import zoodpayImg from '../assets/images/svg/zoodpay-full-logo.svg';
import upayImg from '../assets/images/other/upay.png';
import paymeImg from '../assets/images/other/pay-me.png';
import mastercardImg from '../assets/images/other/mastercard.png';

const Footer = () => {
    return (
        <footer className='footer'>
            {/* footer top */}
            <div className="footer-top-content">
                <ul className="container max-w-7xl">
                    <ul className="footer-top-content-links-list">
                        <li>
                            <Link to="/">Asosiy</Link>
                        </li>
                        <li>
                            <Link to="/">Sotib olingan kurslar</Link>
                        </li>
                        <li>
                            <Link to="/">Bepul kurslar</Link>
                        </li>
                        <li>
                            <Link to="/about">Biz haqimizda</Link>
                        </li>
                    </ul>
                </ul>
            </div>

            {/* footer main */}
            <div className="pt-6">
                <div className="flex-start container max-w-7xl">
                    {/* first child (left content || logo) */}
                    <div className="mr-9">
                        {/* logo */}
                        <Link to='/' className='inline-block mb-6'>
                            <img width={219} height={85} src={logoImg} alt="this is the site logo" className="w-219 h-85" />
                        </Link>
                        <div className="space-y-3.5">
                            <address className='max-w-[251px] opacity-40 not-italic'>95 FF3, App Street Avenue NSW 96209</address>
                            <div className="flex space-x-1">
                                <div className="flex-center space-x-2.5">
                                    <img width={10} height={14} src={telephoneImg} alt="This is an image of a phone icon" className='w-2.5 h-3.5' />
                                    <span>Telefon:</span>
                                </div>

                                <a target='_blank' href="tel:+83742258000" className="opacity-40">8(374) 225 80 00</a>
                            </div>
                            <div className="flex space-x-1">
                                <div className="flex-center space-x-2.5">
                                    <img width={13} height={9} src={mailImg} alt="This is an image of a email icon" className='w-[13px] h-[9px]' />
                                    <span>Email:</span>
                                </div>
                                <a target='_blank' href="mailto:loremipsumlorem@gmail.com" className="opacity-40">loremipsumlorem@gmail.com</a>
                            </div>
                        </div>
                    </div>

                    {/* informations */}
                    <div className="mr-[105px]  mt-10 font-gilroy-medium font-medium">
                        <h3 className="mb-1.5 pl-2">Qo’shimcha ma’lumot va xizmatlar:</h3>
                        <ul className="space-y-1.5 list-disc pl-6">
                            <li>
                                <Link to='/'>Kurs haqida malumot</Link>
                            </li>
                            <li>
                                <Link to='/'>Lorem ipsum</Link>
                            </li>
                            <li>
                                <Link to='/'>Trading kurslari</Link>
                            </li>
                            <li>
                                <Link to='/'>Yetkazib berish</Link>
                            </li>
                            <li>
                                <Link to='/'>Bepul kurslar</Link>
                            </li>
                            <li>
                                <Link to='/'>Chegirmalar</Link>
                            </li>
                            <li>
                                <Link to='/'>Buyurtma</Link>
                            </li>
                            <li>
                                <Link to='/'>Ustozlar</Link>
                            </li>
                        </ul>
                    </div>

                    {/* payments */}
                    <div className="mt-10">
                        {/* networks */}
                        <div className="flex-center space-x-6 mb-7">
                            <h3 className="font-gilroy-semibold font-semibold">Biz bilan bog`laning</h3>
                            <ul className="flex space-x-2.5">
                                <li>
                                    <a rel='nofollow' href="https://x.com" target='_blank' aria-label='https://x.com'>
                                        <img src={twitterImg} width={32} height={32} alt="twitter logo" className="w-8 h-8" />
                                    </a>
                                </li>
                                <li>
                                    <a rel='nofollow' href="https://facebook.com" target='_blank' aria-label='https://facebook.com'>
                                        <img src={facebookImg} width={32} height={32} alt="facebook logo" className="w-8 h-8" />
                                    </a>
                                </li>
                                <li>
                                    <a rel='nofollow' href="https://t.me/finbax" target='_blank' aria-label='https://t.me/finbax'>
                                        <img src={telegramImg} width={32} height={32} alt="telegram logo" className="w-8 h-8" />
                                    </a>
                                </li>
                                <li>
                                    <a rel='nofollow' href="https://instagram.com" target='_blank' aria-label='https://instagram.com'>
                                        <img src={instagramImg} width={32} height={32} alt="instagram logo" className="w-8 h-8" />
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* payments */}
                        <h3 className="font-gilroy-semibold font-semibold mb-3.5">To’lovlar:</h3>
                        <div className="flex gap-3.5 mb-5">
                            <a rel='nofollow' target='_blank' href="https://upay.uz" aria-label='https://upay.uz' className='hover:opacity-70 transition-opacity'>
                                <img src={upayImg} width={74} height={40} alt="upay logo" className='w-[74px] h-10 rounded' />
                            </a>
                            <a rel='nofollow' target='_blank' href="https://payme.uz" aria-label='https://payme.uz' className='hover:opacity-70 transition-opacity'>
                                <img src={paymeImg} width={74} height={40} alt="payme logo" className='w-[74px] h-10 rounded' />
                            </a>
                            <a rel='nofollow' target='_blank' href="https://mastercard.uz" aria-label='https://mastercard.uz' className='hover:opacity-70 transition-opacity'>
                                <img src={mastercardImg} width={74} height={40} alt="mastercard logo" className='w-[74px] h-10 rounded' />
                            </a>
                        </div>
                        <a rel='nofollow' target='_blank' href="https://www.zoodmall.uz/ru/page/about-us/" aria-label='https://www.zoodmall.uz/ru/page/about-us/' className='inline-block hover:opacity-70 transition-opacity'>
                            <img src={zoodpayImg} width={261} height={38} alt="zoodpay logo" className='w-[261px] h-[38px]' />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;