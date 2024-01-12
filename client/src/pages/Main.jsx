import React from 'react'
import styled from 'styled-components';

import testImg from '../imgs/testImg.png';
import heart from '../imgs/heart.png';

const MainContainer = styled.div`
  h1 {
    margin: 20px 0px;
    text-align: center;
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
  }
`

const MainBoxMiddle = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 120px;
  border-bottom: 5px solid black;
`

const MainIntroCircle = styled.div`
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
    p {
      color: #B2B2B2B2;
      font-size: 2rem;
    }
    .heart {
      width: 50px;
    }
  }
  .mainprofile {
    width: 250px;
    height: 250px;
    object-fit: cover;
    background-color: gray;
    border-radius: 100%;
  }
`

const Main = () => {
  return (
    <MainContainer>
      <h1>모두의 커밋</h1>
      <MainBoxTop>
        <button>TODAY</button>
        <button>WEEK</button>
        <button>MONTH</button>
      </MainBoxTop>
      <MainBoxMiddle>
        <MainIntroCircle>
          <img src={testImg} alt="#" className='mainprofile'/>
          <h2>홍길동</h2>
          <h3>32 commits</h3>
          <div className='mainpoint'>
            <img src={heart} alt="heart" className='heart' />
            <p>242 pt</p>
          </div>
        </MainIntroCircle>
        <MainIntroCircle>
          <img src={testImg} alt="#" className='mainprofile'/>
          <h2>홍길동</h2>
          <h3>32 commits</h3>
          <div className='mainpoint'>
            <img src={heart} alt="heart" className='heart' />
            <p>242 pt</p>
          </div>
        </MainIntroCircle>
        <MainIntroCircle>
          <img src={testImg} alt="#" className='mainprofile'/>
          <h2>홍길동</h2>
          <h3>32 commits</h3>
          <div className='mainpoint'>
            <img src={heart} alt="heart" className='heart' />
            <p>242 pt</p>
          </div>
        </MainIntroCircle>
      </MainBoxMiddle>
    </MainContainer>
  )
}

export default Main