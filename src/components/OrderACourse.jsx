import React from 'react';
import { Select } from 'antd';

// images
import astronaut from '../assets/images/svg/baby-astronaut.svg';
import user from '../assets/images/svg/user.svg';
import telephone from '../assets/images/svg/telephone-solid-icon.svg';
import book from '../assets/images/other/book.png';
import '../css/styles.css'
const OrderACourse = () => {
    return (
        <div className='pt-1.5 pb-20'>
            <div className="container">
                {/* parent */}
                <div className="flex-start gap-11 bg-white rounded-25 py-11 pl-5 pr-14">

                    {/* first child */}
                    <div className="flex-center flex-col text-center">
                        <img width={350} height={350} src={astronaut} alt="this is a picture of a baby astronaut" className="w-[350px] h-[350px] mb-10" />
                        <h3 className="text-semibold-26 tracking-1 text-primary-blue-950 -2.5">Biz siz bilan bog’lanamiz</h3>
                        <p className="text-regular-22 text-primary-blue-950 leading-7">There is something to be said about a truly disastrous meal, a meal forever indelible in</p>
                    </div>


                    {/* last child */}
                    <form action='https://echo.htmlacademy.ru' className="order-a-course-section_form">
                        {/* item */}
                        <div className="form-item">
                            <label htmlFor="order-a-course-section_form-name-input">Ismingiz</label>
                            <div className="input-wrapper">
                                <input id='order-a-course-section_form-name-input' name='name' placeholder='Ismingiz' type="text" className="input" required />
                                <img width={23} height={23} src={user} alt="this is a user icon" className="input-icon" />
                            </div>
                        </div>

                        {/* item */}
                        <div className="form-item">
                            <label htmlFor="order-a-course-section_form-tel-input">Telefon raqamingiz</label>
                            <div className="input-wrapper">
                                <input id='order-a-course-section_form-tel-input' name='telephone number' placeholder='+998 __ ___ __ __' type="text" className="input" required />
                                <img width={22} height={22} src={telephone} alt="this is a phone icon" className="input-icon" />
                            </div>
                        </div>

                        {/* item */}
                        <div className="form-item">
                            <label htmlFor="order-a-course-section_form-select">Kursni tanlang</label>
                            <div className="input-wrapper">
                                <Select
                                    id='order-a-course-section_form-select'
                                    defaultValue="intial value"
                                    options={[
                                        { value: 'intial value', label: 'Kursni tanlang', disabled: true },
                                        { value: 'course 1', label: 'course 1' },
                                        { value: 'course 2', label: 'course 2' },
                                        { value: 'course 3', label: 'course 3' },
                                    ]}
                                />
                                <img width={34} height={34} src={book} alt="this is a book icon" className="input-icon book-icon" />
                            </div>
                        </div>

                        {/* button */}
                        <button className="form-submit-btn">Tayyor</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default OrderACourse;