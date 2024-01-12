import React from 'react'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

import testImg from '../imgs/testImg.png';
import heart from '../imgs/heart.png';

const BottomBox = styled(animated.div)`
  display: flex;
  width: 70%;
  margin: 10px;
  background-color: #FFA9A9;
  border-radius: 25px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  .boxprofile {
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
  .introbox {
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px 40px;
  }
  .heartbox {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const MainBottomBox = () => {

  const [ref, inView] = useInView({
    threshold: 0.5
  });

  const springProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(100px)',
  });

  return (
    <BottomBox ref={ref} style={springProps}>
      <div>
        <img src={testImg} alt="#" className='boxprofile'/>
      </div>
      <div className='introbox'>
        <h2>홍길동</h2>
        <h3>32 commits</h3>
        <div className='heartbox'>
          <img src={heart} alt="heart" className='heart' />
          <p>232 pt</p>
        </div>
      </div>
    </BottomBox>
  )
}

export default MainBottomBox