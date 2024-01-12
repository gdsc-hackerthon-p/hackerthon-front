import React from 'react'
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring'

import testImg from '../imgs/testImg.png';
import heart from '../imgs/heart.png';
import firstCrown from '../imgs/firstCrown.png';
import secondCrown from '../imgs/secondCrown.png';
import thirdCrown from '../imgs/thirdCrown.png';
import MainBottomBox from '../components/MainBottomBox';

const MainContainer = styled.div`
  h1 {
    margin: 20px 0px;
    text-align: center;
  }
  .heart {
    width: 50px;
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
  }
`

const MainBoxMiddle = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 120px;
  padding-bottom: 100px;
  border-bottom: 5px solid #D9D9D9;
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
    font-size: 20px;
  }
  .mainpoint {
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .mainprofile {
    width: 250px;
    height: 250px;
    object-fit: cover;
    background-color: white;
    border-radius: 100%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
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
    from: { opacity: 0 }, // 초기 상태
    to: { opacity: 1 },      // 최종 상태   
    config: { duration: 500 },
  });
  return (
    <MainContainer>
      <h1>모두의 커밋</h1>
      <MainBoxTop>
        <button>TODAY</button>
        <button>WEEK</button>
        <button>MONTH</button>
      </MainBoxTop>
      <MainBoxMiddle>
        <MainIntroCircle style={springs}>
          <img src={secondCrown} alt="#" />
          <img src={testImg} alt="#" className='mainprofile'/>
          <h2>홍길동</h2>
          <h3>32 commits</h3>
          <div className='mainpoint'>
            <img src={heart} alt="heart" className='heart' />
            <p>242 pt</p>
          </div>
        </MainIntroCircle>
        <MainIntroCircle style={springs}>
          <img src={firstCrown} alt="#" />
          <img src={testImg} alt="#" className='mainprofile'/>
          <h2>홍길동</h2>
          <h3>32 commits</h3>
          <div className='mainpoint'>
            <img src={heart} alt="heart" className='heart' />
            <p>242 pt</p>
          </div>
        </MainIntroCircle>
        <MainIntroCircle style={springs}>
          <img src={thirdCrown} alt="#" />
          <img src={testImg} alt="#" className='mainprofile'/>
          <h2>홍길동</h2>
          <h3>32 commits</h3>
          <div className='mainpoint'>
            <img src={heart} alt="heart" className='heart' />
            <p>242 pt</p>
          </div>
        </MainIntroCircle>
      </MainBoxMiddle>
      <MainBoxBottom>
        <MainBottomBox/>
        <MainBottomBox/>
        <MainBottomBox/>
        <MainBottomBox/>
        <MainBottomBox/>
        <MainBottomBox/>
      </MainBoxBottom>
    </MainContainer>
  )
}

export default Main