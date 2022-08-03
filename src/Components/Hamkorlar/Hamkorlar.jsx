import React from 'react';
import './Hamkorlar.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper";
import Group from '../../Images/Group1.png'

const Hamkorlar = () => {
    return (
      <div className="hamkorlar">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide className="SwiperSlide">
            <img  className="hhh" src={Group} alt="" />
          </SwiperSlide>
          <SwiperSlide className="SwiperSlide lll">
            <img className='hhh'  src={Group} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    );
}

export default Hamkorlar;
