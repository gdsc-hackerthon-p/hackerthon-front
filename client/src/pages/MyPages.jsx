import React from 'react';
import styled from 'styled-components';
import {useSpring} from 'react-spring';
import { useState } from 'react';

import testImg from '../imgs/testImg.png';
import heart from '../imgs/heart.png';
import axios from 'axios';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const NicknameChangeWindow = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20pxgit;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`
const WithdrawWindow = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

const MyPageContainer = styled.div`
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

const MyPageBox = styled.div`
  display: flex; 
  justify-content: space-between;
  margin-top: 70px;
  padding-bottom: 100px;
`

const MyPageLeftBox = styled.div`
  width: 50%;
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

  h4 {
    margin: 10px 0px;
    color: #000000b1;
    font-size: 20px;

  }

  .mypagepoint {
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transform: scale(1.0);
    }
    p {
      color: black;
    }
  }
  
  .mypageprofile {
    width: 250px;
    height: 250px;
    object-fit: cover;
    background-color: white;
    border-radius: 100%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`

const MyPageRightBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: left;

  h3 {
    margin: 10px 10px;
    font-size: 20px;
  }
`
const PointBox = styled.div`
  margin: 10px 0px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`
const RivalBox = styled.div`
  display: flex;
  margin: 10px;
  background-color: #efefef;
  border-radius: 25px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  .boxprofile {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    margin: 0px 10px;
  }
  .introbox {
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
  }
  .heartbox {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 30px;
  }
  p {
    font-size: 20px;
  }
  h4 {
    font-size: 20px;
  }
`
const Button = styled.button`
  width: 200px;
  height: 50px;
  border: none;
  color: white;
  background-color: #b1b1b1; 
  text-align: center;
  display: inline-block;
  font-size: 16px;
  margin: 100px 20px;
  align-self: flex-end;
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`

const MyPage = () => {

  const navigate = useNavigate();

  const [showNicknameChange, setShowNicknameChange] = useState(false);
  const [showWithdrawWindow, setShowWithdrawWindow] = useState(false);

  const springs = useSpring({
    from: { opacity: 0 }, // 초기 상태
    to: { opacity: 1 },      // 최종 상태   
    config: { duration: 500 },
  });

  const handleNicknameChangeClick = () => {
    setShowNicknameChange(!showNicknameChange);
  };

  const handleWithdrawClick = () => {
    setShowWithdrawWindow(!showWithdrawWindow);
  };

  const name = localStorage.getItem('user')
  let number = 0;

  const fetchData = async() => {
    const res = await axios.get(`http://localhost:4000/userpage?usernickname=${name}`);
    return res.data;
  }

  const {data} = useQuery({
    queryKey: ['userDetail'],
    queryFn: fetchData
  })

  const UpMutation = useMutation({
    mutationKey: ['createUser'],
    mutationFn: (newTodo) => { return axios.post('http://localhost:4000/commitup', newTodo) },
    onSuccess: () => { 
      alert("하루 1 커밋 축하합니다!!")
    },
    onError: (error) => { console.error('Error creating todo:', error); }
  })

  const handleOnClick = () => {
    if(number > 1) {
      return alert('하루에 1커밋만 가능합니다!!')
    }
    number += 1;
    UpMutation.mutate({commitUp: 1, name});
  }

    return (
      <MyPageContainer>
        <h1>마이페이지</h1>
        {data?.map(item => (
          <MyPageBox>
            <MyPageLeftBox style={springs}>
                <img src={testImg} alt="#" className='mypageprofile'/>
                <h2>{item.nickname}</h2>
                <h4>20일째 커밋하고 있어요!</h4>
                <h3>{item.commit} commits</h3>
                
                <PointBox>
                <div className='mypagepoint' onClick={handleOnClick}>
                  <img src={heart} alt="heart" className='heart' />
                  <p>하루 1커밋 올리기</p>
                </div>
                </PointBox>
            </MyPageLeftBox>

            <MyPageRightBox>
              <h3>당신의 라이벌</h3>

              <RivalBox>
              <div>
                <img src={testImg} alt="#" className='boxprofile'/>
              </div>
              <div className='introbox'>
                <h4>홍길동</h4>
                <h3>32 commits</h3>
                <div className='heartbox'>
                <img src={heart} alt="heart" className='heart' />
                <p>242 pt</p>
                </div>
                </div>
              </RivalBox>

              <RivalBox>
              <div>
                <img src={testImg} alt="#" className='boxprofile'/>
              </div>
              <div className='introbox'>
                <h4>홍길동</h4>
                <h3>32 commits</h3>
                <div className='heartbox'>
                <img src={heart} alt="heart" className='heart' />
                <p>242 pt</p>
                </div>
                </div>
              </RivalBox>

              <RivalBox>
              <div>
                <img src={testImg} alt="#" className='boxprofile'/>
              </div>
              <div className='introbox'>
                <h4>홍길동</h4>
                <h3>32 commits</h3>
                <div className='heartbox'>
                <img src={heart} alt="heart" className='heart' />
                <p>242 pt</p>
                </div>
                </div>
              </RivalBox>
              <ButtonContainer>
              <Button onClick={handleNicknameChangeClick}>닉네임 변경하기</Button>
              <Button onClick={handleWithdrawClick}>회원탈퇴</Button>
              </ButtonContainer>
            </MyPageRightBox>
          </MyPageBox>
        ))}

      {showNicknameChange && (
        <NicknameChangeWindow>
          <h2>닉네임 변경</h2>
    <form>
      <label htmlFor="newNickname">새로운 닉네임 : </label>
      <input type="text" id="newNickname" />
      <button type="submit">저장</button>
    </form>
    <button onClick={handleNicknameChangeClick}>닫기</button>
        </NicknameChangeWindow>
      )}

      {showWithdrawWindow && (
        <WithdrawWindow>
          <h2>회원탈퇴</h2>
          <h4>탈퇴하시겠습니까?</h4>
          <button onClick={handleWithdrawClick}>취소</button>
          <button>탈퇴</button>
        </WithdrawWindow>
      )}

      </MyPageContainer>
    );
  };

export default MyPage;