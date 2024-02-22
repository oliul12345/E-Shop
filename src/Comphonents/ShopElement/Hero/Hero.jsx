// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

<link rel="stylesheet" href="./Hero.css" />

// import required modules
import { Scrollbar } from 'swiper/modules';

const Hero = () => {
    return (
        <div>
             <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='md:flex gap-6 items-center md:h-[600px]'>
                <div className='md:w-1/2'>
                    <img src="/public/Ecommerce_Frontend_Assets/Assets/hero_image.png" alt="" />
                </div>
                <div className='md:w-1/2 p-6'>
                    <p>New Arrivals</p>
                    <div className= 'text-5xl md:text-7xl font-bold space-y-4'> <p className='flex items-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500'>New <span><img className='w-10 ' src="/public/Ecommerce_Frontend_Assets/Assets/hand_icon.png" alt="" /></span></p> <p className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500'> Collection</p> <p className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500'>For EveryOne</p></div>
                    <button className='bg-red-500 p-3 text-white font-bold '>Latest Collection</button>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='md:flex gap-6 items-center md:h-[600px]'>
                <div className='md:w-1/2'>
                    <img src="/public/Ecommerce_Frontend_Assets/Assets/exclusive_image.png" alt="" />
                </div>
                <div className='md:w-1/2 p-6'>
                    <p>New Arrivals</p>
                    <div className= 'text-5xl md:text-7xl font-bold space-y-4'> <p className='flex items-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500'>New <span><img className='w-10 ' src="/public/Ecommerce_Frontend_Assets/Assets/hand_icon.png" alt="" /></span></p> <p className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500'> Collection</p> <p className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500'>For EveryOne</p></div>
                    <button className='bg-red-500 p-3 text-white font-bold '>Latest Collection</button>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Hero;