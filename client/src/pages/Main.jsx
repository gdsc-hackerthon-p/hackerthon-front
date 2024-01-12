import React, { useEffect } from 'react'
import styled from 'styled-components';
import { useSpring, animated, useInView } from 'react-spring'

import testImg from '../imgs/testImg.png';
import heart from '../imgs/heart.png';
import firstCrown from '../imgs/firstCrown.png';
import secondCrown from '../imgs/secondCrown.png';
import thirdCrown from '../imgs/thirdCrown.png';
import MainBottomBox from '../components/MainBottomBox';
import MainSwiper from '../components/MainSwiper';
import axios from 'axios';
import { useInfiniteQuery } from '@tanstack/react-query';

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

const TopImg1 = styled.img`
  margin-top: 60px;
`

const Main = () => {

  const {ref, inView} = useInView();

  const springs = useSpring({
		from: {x : -400},
		to: {x : 0}
  });

  // const fetchTodos = async ({pageParam}) => {
  //   const res = await axios.get(`https://hackerthon.thisiswandol.com:8443/api/user/ranking?size=10&page=${pageParam}`);
  //   return res.data;
  // }

  // const { data, status, error, fetchNextPage, isFetchingNextPage, hasNextPage } = useInfiniteQuery({
  //   queryKey: ['todos'],
  //   queryFn: fetchTodos,
  //   initialPageParam: 1,
  //   getNextPageParam: (lastpage, allpage) => {
  //     const nextPage = lastpage.length ? allpage.length + 1 : undefined ;
  //     return nextPage
  //   }
  // })

  // console.log(data)

  // const content = data?.pages.map((todos) => 
  //   todos.map((todo) => {
  //     return <MainBottomBox key={todo.id} todo={todo}/>
  //   })
  // );

  // useEffect(() => {
  //   if(inView) {
  //     fetchNextPage();
  //   }
  // },[inView, fetchNextPage])

  // if(status === 'pending') {
  //   return <p>Loading....</p>
  // }
  // if(status === 'error') {
  //   return <p>Error : {error.message}</p>
  // }


  return (
    <MainContainer style={springs}>
      <h1>모두의 커밋</h1>
      <MainBoxTop>
        <button>TODAY</button>
        <button>WEEK</button>
        <button>MONTH</button>
      </MainBoxTop>
      <MainBoxMiddle>
        <MainIntroCircle>
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
          <TopImg1 src={firstCrown} alt="#" />
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
      <MainSwiper/>
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