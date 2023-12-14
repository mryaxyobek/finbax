import React from 'react';

// img
import searchIcon from '../assets/images/svg/search.svg';
import statisticsImg from '../assets/images/other/statistics.png';

const HomePageHero = () => {
    return (
        <div className='pt-12 pb-9'>
            <div className="flex-center container gap-9">
                {/* first child */}
                <div className='max-w-598'>
                    <p className="text-regular-24 mb-6">Creative mind, creative works</p>
                    <h1 className="mb-11 text-primary-blue-600 min-w-[598px]"><span className="text-white">We're</span> trading agency.</h1>
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className='flex-center relative'>
                        <input
                            type="search"
                            placeholder='Kursni qidirish'
                            className='w-full rounded-25 text-lg py-4 pl-10 pr-16 text-black placeholder:text-black placeholder:leading-normal placeholder:opacity-50'
                        />

                        {/* search btn */}
                        <button className="absolute right-6 w-[27px] h-[29px]">
                            <img width={27} height={29} src={searchIcon} alt="this is a search icon image" className="w-full h-full opacity-50" />
                        </button>
                    </form>
                </div>

                {/* last child */}
                <div className="relative w-full h-[521px]">
                    <img
                        width={646}
                        height={521}
                        src={statisticsImg}
                        alt=""
                        className='w-full h-full'
                    />

                    {/* bg blur effct */}
                    <div className="blur-effect w-[487px] h-[449px] -bottom-10 right-12 blur-150"></div>
                </div>
            </div>
        </div>
    )
};

export default HomePageHero;