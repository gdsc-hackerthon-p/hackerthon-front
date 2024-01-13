import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";

import "swiper/css/pagination";
import 'swiper/css';
import styled from 'styled-components';

import firstCrown from '../imgs/firstCrown.png';
import testImg from '../imgs/testImg.png';
import goldFrame from '../imgs/goldframe.png';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

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
    padding: 10px;
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

  const fetchData = async() => {
    const res = await axios.get('http://localhost:4000/user');
    return res.data.slice(3,11);
  }

  const {data, status, error} = useQuery({
    queryKey: ['userInfo'],
    queryFn: fetchData
  })

  if(status === 'error') {
    console.log(error)
  }

  return (
    <MainSwiperContainer>
      <div className='top10'>
        <img src={firstCrown} alt="#" />
        <h1>TOP 10</h1>
      </div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={2}
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
      >
        {data?.map(item => (
          <SwiperSlide key={item.username} className='slide'>
            <img src={testImg} alt="#" />
            <p>{item.nickname}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </MainSwiperContainer>
  )
}

export default MainSwiper