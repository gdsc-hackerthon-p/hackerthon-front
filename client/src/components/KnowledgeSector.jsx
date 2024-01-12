import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import book from '../imgs/book.png';

const KnowledgeContainer = styled.div`
  margin-bottom: 100px;
  h2 {
    margin: 50px 0px;
    text-align: center;
    font-weight: bold;
  }
  h3 {
    display: none;
  }
  @media screen and (max-width: 600px) {
    h3 {
      display: block;
      font-size: 2rem;
      text-align: center;
    }
  }
`

const KnowledgeBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin: 20px auto;
  height: 100px;
  .linkbox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px 5px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  a {
    flex-grow: 1;
    color: black;
    text-decoration: none;
    p {
      padding: 0px 20px;
      font-size: 2rem;
      @media screen and (max-width: 1000px) {
        font-size: 25px;
      }
    }
  }
  img {
    width: 150px;
    object-fit: cover;
    @media screen and (max-width: 1000px) {
      width: 75px;
    }
  }
  @media screen and (max-width: 600px) {
    display: none;
    h3 {
      font-size: 24px;
      text-align: center;
    }
  }
`

const KnowledgeSector = () => {
  return (
    <KnowledgeContainer>
      <h2>더 많은 개발 지식</h2>
      <h3>핸드폰은 지원히지 않습니다.</h3>
      <KnowledgeBox>
        <Link to={'/knowledge1'} className='linkbox'>
          <p>프로그래밍 언어는 왜 이렇게 많을까?</p>
          <img src={book} alt="#"/>
        </Link>
        <Link to={'/knowledge2'} className='linkbox' >
          <p>왜 프로그래밍 언어는 계속 업데이트 될까?</p>
          <img src={book} alt="#"/>
        </Link>
      </KnowledgeBox>
      <KnowledgeBox>
        <Link to={'/knowledge3'} className='linkbox'>
          <p>API 문서는 왜 있죠?</p>
          <img src={book} alt="#"/>
        </Link>
        <Link to={'/knowledge4'} className='linkbox' >
          <p>라이브러리와 프레임워크의 차이점</p>
          <img src={book} alt="#"/>
        </Link>
      </KnowledgeBox>
    </KnowledgeContainer>
  )
}

export default KnowledgeSector