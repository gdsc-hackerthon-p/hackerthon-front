import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";

import "swiper/css/pagination";
import 'swiper/css';
import styled from 'styled-components';

import firstCrown from '../imgs/firstCrown.png';
import testImg from '../imgs/testImg.png';
import goldFrame from '../imgs/goldframe.png';

const MainSwiperContainer = styled.div`
  padding-bottom: 25px;
  .top10 {
    display: flex;
    justify-content: center;
    margin: 20px 0px;
  }
  .mySwiper {
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
    border-radius: 20px;
    background-color: white;
  }

  .swiper {
    height: 250px;
  }

  .slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 250px;
    background: url(${goldFrame}) no-repeat center/contain;
    img {
      width: 100px;
      height: 100px;
      object-fit: cover;
    }
    p {
      color: black;
    }
  }

  /* pagination active button */
  .swiper-pagination-bullet-active {
    background-color: black !important;
  }
`

const MainSwiper = () => {
  return (
    <MainSwiperContainer>
      <div className='top10'>
        <img src={firstCrown} alt="#" />
        <h1>TOP 10</h1>
      </div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={4}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false
        }}
        breakpoints={{
          450: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          1100: {
            slidesPerView: 4,
            spaceBetween: 50
          }
        }}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide className='slide'>
          <img src={testImg} alt="#" />
          <p>홍길동</p>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img src={testImg} alt="#" />
          <p>홍길동</p>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img src={testImg} alt="#" />
          <p>홍길동</p>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img src={testImg} alt="#" />
          <p>홍길동</p>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img src={testImg} alt="#" />
          <p>홍길동</p>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img src={testImg} alt="#" />
          <p>홍길동</p>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img src={testImg} alt="#" />
          <p>홍길동</p>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img src={testImg} alt="#" />
          <p>홍길동</p>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img src={testImg} alt="#" />
          <p>홍길동</p>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img src={testImg} alt="#" />
          <p>홍길동</p>
        </SwiperSlide>

      </Swiper>
    </MainSwiperContainer>
  )
}

export default MainSwiper