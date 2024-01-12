import React from 'react'
import styled from 'styled-components'

import introImg1 from '../imgs/introImg1.png';
import introImg2 from '../imgs/introImg2.png';
import introImg3 from '../imgs/introImg3.png';
import { animated, useSpring } from 'react-spring';

const IntroContainer = styled(animated.div)`
  margin: 10px;
  line-height: 40px;
  h1 {
    padding: 50px;
    line-height: 60px;
    font-size: 4rem;
  }
  p {
    line-height: 52px;
    font-size: 3rem;
    font-weight: bold;
  }
`

const IntroBox = styled.div`
  position: relative;
  width: 50%;
  margin: 0 auto;
  left: 100px;
  margin-bottom: 60px;
  padding: 50px;
  border-radius: 20px;
  text-align: center;
  font-size: 24px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  img {
    position: absolute;
    width: 300px;
    object-fit: cover;
    top: 70px;
    right: -150px;
  }
  @media screen and (max-width: 1100px) {
    left: 0;
  }
  @media screen and (max-width: 450px) {
    img {
      top: -80px;
      left: 0;
    }
  }
`

const IntroBox2 = styled.div`
  position: relative;
  width: 50%;
  right: 100px;
  margin: 60px auto;
  padding: 50px;
  border-radius: 20px;
  text-align: center;
  font-size: 24px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  img {
    position: absolute;
    width: 300px;
    object-fit: cover;
    top: 100px;
    left: -150px;
  }
  @media screen and (max-width: 1100px) {
    left: 0;
  }
  @media screen and (max-width: 450px) {
    img {
      top: -120px;
      left: 0;
    }
  }
`

const IntroBox3 = styled.div`
  position: relative;
  width: 50%;
  left: 150px;
  margin: 60px auto;
  padding: 50px;
  border-radius: 20px;
  text-align: center;
  font-size: 24px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  img {
    position: absolute;
    width: 300px;
    object-fit: cover;
    top: 80px;
    right: -150px;
  }
  @media screen and (max-width: 1100px) {
    left: 0;
  }
  @media screen and (max-width: 450px) {
    img {
      top: -120px;
      left: 0;
    }
  }
`

const Intro = () => {

  const springs = useSpring({
		from: {x : -400},
		to: {x : 0}
	})

  return (
    <IntroContainer style={springs}>
      <h1>모두의 커밋을<br/>소개할게요!!</h1>
      <IntroBox>
        <p>
          커밋을 하면 할수록 등급이 올라가요!!<br/>
          프로필에서 확인하세요!!
        </p>
        <img src={introImg1} alt="#" />
      </IntroBox>
      <IntroBox2>
        <p>
          코드를 많이 입력할 수록 point 를 많이 드려요<br/>
          한줄의 코드는 그만!!
        </p>
        <img src={introImg2} alt="#" />
      </IntroBox2>
      <IntroBox3>
        <p>
          커밋과 point 를 많이 얻게 되면<br/>
          명예의 전당에 올라갈 수 있어요!!
        </p>
        <img src={introImg3} alt="#" />
      </IntroBox3>
    </IntroContainer>
  )
}

export default Intro