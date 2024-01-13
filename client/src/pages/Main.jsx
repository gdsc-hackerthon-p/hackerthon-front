import React, { useState } from 'react'
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring'

import { useQuery } from '@tanstack/react-query';

import testImg from '../imgs/testImg.png';
import heart from '../imgs/heart.png';
import firstCrown from '../imgs/firstCrown.png';
import secondCrown from '../imgs/secondCrown.png';
import thirdCrown from '../imgs/thirdCrown.png';
import MainBottomBox from '../components/MainBottomBox';
import MainSwiper from '../components/MainSwiper';
import axios from 'axios';

const MainContainer = styled(animated.div)`
  h1 {
    margin: 20px 0px;
    text-align: center;
  }
  .heart {
    width: 50px;
    @media screen and (max-width: 450px) {
      width: 20px;
    }
  }
  p {
    color: #B2B2B2B2;
    font-size: 2rem;
  }
`

const MainBoxTop = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 10px solid black;
  button {
    font-size: 3rem;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    transition: all .5s;
    &:hover {
      transform: scale(1.1);
    }
    @media screen and (max-width: 450px) {
      font-size: 22px;
    }
  }
`

const MainBoxMiddle = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 120px;
  padding-bottom: 100px;
  border-bottom: 5px solid #D9D9D9;
  .fristCircle {
    position: relative;
    bottom: 80px;
  }
`

const MainIntroCircle = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    margin: 20px 0px;
  }
  h3 {
    margin: 10px 0px;
    color: #B2B2B2B2;
    font-size: 30px;
  }
  .mainpoint {
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      color: black;
    }
    @media screen and (max-width: 450px) {
      width: 100px;
    }
  }
  .mainprofile {
    width: 250px;
    height: 250px;
    object-fit: cover;
    background-color: white;
    border-radius: 100%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    @media screen and (max-width: 450px) {
      width: 100px;
      height: 100px;
    }
  }
`

const MainBoxBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin:  50px;
`

const Main = () => {

  const springs = useSpring({
    from: { transform: 'translateX(-400px)' },
    to: { transform: 'translateX(0)' }
  });

  const fetchData = async() => {
    const res = await axios.get('http://localhost:4000/user');
    return res.data;
  }

  const fetchData2 = async() => {
    const res = await axios.get('http://localhost:4000/user');
    return res.data.slice(11);
  }

  const {data, status, error} = useQuery({
    queryKey: ['userInfo'],
    queryFn: fetchData
  })

  const {data: data2 } = useQuery({
    queryKey: ['userInfo2'],
    queryFn: fetchData
  })

  if(status === 'error') {
    console.log(error)
  }


  return (
    <MainContainer style={springs}>
      <h1>모두의 커밋</h1>
      <MainBoxTop>
      </MainBoxTop>
      <MainBoxMiddle>
      {data && data.length >= 3 && (
        <>
          <MainIntroCircle>
            <img src={secondCrown} alt="#" />
            <img src={testImg} alt="#" className='mainprofile' />
            <h2>{data[0].nickname}</h2>
            <h3>{data[0].commit} commits</h3>
            <div className='mainpoint'>
              <img src={heart} alt="heart" className='heart' />
              <p>{data[0].commit} pt</p>
            </div>
          </MainIntroCircle>
          <MainIntroCircle className='fristCircle' style={springs}>
            <img src={firstCrown} alt="#" />
            <img src={testImg} alt="#" className='mainprofile' />
            <h2>{data[1].nickname}</h2>
            <h3>{data[1].commit} commits</h3>
            <div className='mainpoint'>
              <img src={heart} alt="heart" className='heart' />
              <p>{data[1].commit} pt</p>
            </div>
          </MainIntroCircle>
          <MainIntroCircle style={springs}>
            <img src={thirdCrown} alt="#" />
            <img src={testImg} alt="#" className='mainprofile' />
            <h2>{data[2].nickname}</h2>
            <h3>{data[2].commit} commits</h3>
            <div className='mainpoint'>
              <img src={heart} alt="heart" className='heart' />
              <p>{data[2].commit} pt</p>
            </div>
          </MainIntroCircle>
        </>
      )}
    </MainBoxMiddle>
      <MainSwiper/>
      <MainBoxBottom>
        {data2?.map(item => (
          <>
            <MainBottomBox data={item}/>
          </>
        ))}
      </MainBoxBottom>
    </MainContainer>
  )
}

export default Main