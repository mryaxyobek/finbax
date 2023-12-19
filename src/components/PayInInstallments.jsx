import React from 'react';

// img
import zoodPayLogo from '../assets/images/svg/zoodpay-logo.svg';

const PayInInstallments = () => {
    return (
        <section className='pt-60 pb-50'>
            <div className="flex-center flex-col justify-center container">
                {/* logo */}
                <div className="restangle-shape before:mb-12 mb-14">
                    <div className="flex-center space-x-11">
                        <img width={90} height={88} src={zoodPayLogo} alt="" className="w-[98px] h-[88px]" />
                        <span className='text-[70px] uppercase font-montserrat font-feature-off'>
                            <span className="font-light">
                                ZOOD
                            </span>
                            <span className="font-semibold">
                                PAY
                            </span>
                        </span>
                    </div>
                </div>

                {/* presentage list */}
                <ul className="percentage-list mb-10">
                    <li className="percentage">25%</li>
                    <li className="percentage">25%</li>
                    <li className="percentage">25%</li>
                    <li className="percentage">25%</li>
                </ul>

                {/* description */}
                <p className="text-45 font-feature-off">4ga teng bo'lib to'lash imkoniyati</p>
            </div>
        </section>
    )
};

export default PayInInstallments;