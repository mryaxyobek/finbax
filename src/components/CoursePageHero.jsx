import React, { useEffect } from 'react';

// images
import authorImg from '../assets/images/other/abdullayev-anvar.jpg';
import imgCorner from '../assets/images/svg/img-corner.svg';
import imgPlay from '../assets/images/svg/small-play-icon.svg';
import imgTasks from '../assets/images/svg/tasks-icon.svg';
import imgModule from '../assets/images/svg/module-icon.svg';

const CoursePageHero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='pt-36 pb-10'>
      <div className="container max-w-[1220px]">
        <div className="flex-start gap-[90px]">
          {/* image wrapper */}
          <div className="relative max-w-max w-full">
            <img width={364} height={474} src={authorImg} alt="" className="w-[364px] h-[474px] object-cover rounded-25" />

            {/* corner */}
            <img width={185} height={200} src={imgCorner} alt="" aria-hidden="true" className='absolute -top-0.5 -right-0.5' />
            <img width={185} height={200} src={imgCorner} alt="" aria-hidden="true" className='absolute -bottom-0.5 -left-0.5 rotate-180' />
          </div>

          {/* descriptions wrapper */}
          <div className="">
            <h2 className="text-[50px] capitalize font-gilroy-bold font-bold mb-10 tracking-normal">Ipsum a sit lectus ultrices.</h2>

            <div className="flex space-x-10 mb-10">
              <div className="flex-center gap-2.5">
                <img width={24} height={24} src={imgModule} alt="" className="w-6 h-6" />
                <span>3 Modul</span>
              </div>
              <div className="flex-center gap-2.5">
                <img width={24} height={24} src={imgPlay} alt="" className="w-6 h-6" />
                <span>12x Lessons</span>
              </div>
              <div className="flex-center gap-2.5">
                <img width={28} height={28} src={imgTasks} alt="" className="w-7 h-7" />
                <span>Tasks</span>
              </div>
            </div>

            <p className="text-25 leading-[41px] mb-15">Donec mollis feugiat faucibus dui egestas. Aliquet at dictum lectus nullam. Pharetra dolor est dui elementum semper euismod. Viverra ipsum ultrices platea mauris suspendisse sit urna sapien. </p>

            <div className="flex gap-[60px]">
              <span className='inline-block py-2 px-7 rounded-10 border border-primary-blue-600 text-semibold-22'>2 300 000 UZS</span>
              <button className='inline-block py-2 px-7 rounded-10 border-2 border-white text-semibold-22'>Xarid qilish</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default CoursePageHero;