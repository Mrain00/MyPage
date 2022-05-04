import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../App.css";

// import required modules
import { Pagination } from "swiper";

import Herbal from '../assets/portadas apps/herbal-oil.jpg'
import Petshop from '../assets/portadas apps/petshop.jpg'
import Material from '../assets/portadas apps/material-dev.jpg'
import Gameover from '../assets/portadas apps/gameover.jpg'
import Amazing from '../assets/portadas apps/amazingEvents.jpg'
import Mytinerary from '../assets/portadas apps/mytinerary.jpg'
import { FaReact } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di'
import { SiMaterialui } from 'react-icons/si'

export default function App() {
  return (
    <>
    <Swiper
        slidesPerView={2}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={Herbal} alt='herbal oil'/>
            <h2 className='text-js'><DiJavascript1 className='fa-icon'/>Herbal Oil</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Petshop} alt='petshop'/>
            <h2 className='text-js'><DiJavascript1 className='fa-icon'/>Franco Petshop</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Material} alt='material'/>
            <h2 className='text-mui'><SiMaterialui className='fa-icon'/>Material UI</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Gameover} alt='game over'/>
            <h2 className='text-react'><FaReact className='fa-icon'/>Game Over</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Amazing} alt='amazing events'/>
            <div>
            <h2 className='text-js'><DiJavascript1 className='fa-icon'/>Amazing Events</h2>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <a href="https://github.com/Mrain00/MyTinerary-Silva" className='hipervinculo-portfolio'>
            <img src={Mytinerary} alt='My tinerary'/>
            <div>
            <h2 className='text-react'><FaReact className='fa-icon'/>My Tinerary</h2>
            </div>
            </a>
        </SwiperSlide>
      </Swiper>
    </>
  );
}