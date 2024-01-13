import React from 'react'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

import testImg from '../imgs/testImg.png';
import heart from '../imgs/heart.png';
import { useNavigate } from 'react-router-dom';

const BottomBox = styled(animated.div)`
  display: flex;
  width: 70%;
  margin: 10px;
  background-color: #FFA9A9;
  border-radius: 25px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  cursor: pointer;
  h3 {
    font-size: 3rem;
  }
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
    h2 {
      font-size: 3rem;
    }
    @media screen and (max-width: 1000px){
      gap: 25px;
      margin-bottom: 15px;
    }
    @media screen and (max-width: 700px){
      h3 {
        display: none;
      }
    }
    @media screen and (max-width: 450px){
      flex-direction: column;
    }
  }
  .heartbox {
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      color: black;
    }
  }
  @media screen and (max-width: 1000px){
    flex-direction: column;
    align-items: center;
  }
`

const MainBottomBox = ({data}) => {
  const navigate = useNavigate();

  const [ref, inView] = useInView({
    threshold: 0.5
  });

  const springProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(100px)',
  });

  const handleOnClick = (data) => {
    navigate(`/detail/${data}`)
  }

  return (
    <>
    {data && (
      <BottomBox ref={ref} style={springProps} onClick={() => handleOnClick(data.nickname)}>
        <div>
          <img src={testImg} alt="#" className='boxprofile'/>
        </div>
        <div className='introbox'>
          <h2>{data.nickname}</h2>
          <h3>{data.commit} commits</h3>
          <div className='heartbox'>
            <img src={heart} alt="heart" className='heart' />
            <p>{data.commit} pt</p>
          </div>
        </div>
      </BottomBox>
    )}
    </>
  )
}

export default MainBottomBox