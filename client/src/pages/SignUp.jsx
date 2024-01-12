import styled from "styled-components"

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 80vh;
  margin: 30px 0px 30px;
  padding-top: 50px;
  h1 {
    padding: 15px;
    font-size: 3rem;
    font-weight: bold;
    border-bottom: 1px solid #EEEEEE;
  }
  .registerbutton {
    width: 350px;
    margin-top: 20px;
    padding: 10px;
    border-radius: 15px;
    font-size: 26px;
    font-weight: bold;
    outline: none;
    border: none;
    background-color: black;
    color: white;
    cursor: pointer;
  }
  p {
    font-size: 24px;
  }
`

const SignUpTop = styled.div`
  position: relative;
`

const SignUpForm = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  border-top: 3px solid black;
  label {
    display: block;
    margin: 15px 0px;
    font-size: 36px;
    color: #949494;
  }
  input {
    width: 300px;
    padding: 15px;
    font-size: 18px;
    font-weight: bold;
    border-radius: 10px;
    border: none;
    outline: none;
    background-color: #d2d2d2;
  }
  p {
    margin-top: 5px;
    line-height: 20px;
    color: #d8818d;
  }
`

const SignUpNameBox = styled.div`
`

const SignUpPasswordBox = styled.div`
  display: flex;
  flex-direction: column;
  input {
    margin-bottom: 10px;
  }
`

const SignUp = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    userId: '',
    gitId: '',
    nickName: '',
    userPassword: '',
    checkPassword: ''
  })

  const [nameTest, setNameTest] = useState(true);
  const [passwordTest, setPasswordTest] = useState(true);

  const validateName = (input) => {
    const validCharacters = /^[a-z0-9]+$/;
    const startsWithLowerCase = /^[a-z]/;
    const validLength = /^.{4,12}$/;
    return validCharacters.test(input) && startsWithLowerCase.test(input) && validLength.test(input);
  };

  const validatePassword = (input) => {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d|\W).{6,20}$/;
    return pattern.test(input);
  };

  const handleNameBlur = () => {
    setNameTest(validateName(user.userId));
  };
  const handlePasswordBlur = () => {
    setPasswordTest(validatePassword(user.userPassword));
  };

  const handleLegister = () => {
    if (!user.userId || !user.userPassword || !user.gitId) {
      alert("모든 정보를 입력해 주세요.");
      return;
    }
    if (user.userPassword !== user.checkPassword) {
      alert('비밀번호 확인이 잘못됐습니다.')
      return;
    }
    if (!passwordTest) {
      alert('비밀번호를 제대로 입력해 주세요.')
      return;
    }

    const newUser = user;
    signupMutation.mutate(newUser);
  }

  const handleOnChangeUser = (e)=> {
    setUser(prevUser => ({
      ...prevUser,
      [e.target.name] : e.target.value
    }))
  }

  const signupMutation = useMutation({
    mutationKey: ['createUser'],
    mutationFn: (newTodo) => { return axios.post('/api/todos', newTodo) },
    onSuccess: () => { 
      alert('회원가입에 성공하셨습니다.')
      navigate('/login') 
    },
    onError: (error) => { console.error('Error creating todo:', error); },
    onSettled: () => {},
  })

  return ( 
    <SignUpContainer>
      <SignUpTop>
        <h1>회원가입</h1>
      </SignUpTop>
      <SignUpForm>
        <SignUpNameBox>
          <label htmlFor="userId">아이디</label>
          <input type="text" id="userId" name="userId" value={user.userId} onChange={handleOnChangeUser} placeholder="아이디" onBlur={handleNameBlur}/>
          {nameTest ? '' : <p>영문 소문자와 숫자만 사용하여, 영문 소문자로<br/> 시작하는 4 ~ 12자의 아이디를 입력해 주세요.</p> }
        </SignUpNameBox>
        <SignUpNameBox>
          <label htmlFor="gitId">깃허브아이디</label>
          <input type="text" id="gitId" name="gitId" value={user.gitId} onChange={handleOnChangeUser} placeholder="깃허브 아이디"/>
        </SignUpNameBox>
        <SignUpNameBox>
          <label htmlFor="nickName">닉네임</label>
          <input type="text" id="nickName" name="nickName" value={user.nickName} onChange={handleOnChangeUser} placeholder="닉네임"/>
        </SignUpNameBox>
        <SignUpPasswordBox>
          <label htmlFor="userPassword">비밀번호</label>
          <input type="password" id="userPassword" name="userPassword" value={user.userPassword} autoComplete="current-password" onChange={handleOnChangeUser} placeholder="비밀번호" onBlur={handlePasswordBlur}/>
          <input type="password" name="checkPassword" value={user.checkPassword} autoComplete="current-password" onChange={handleOnChangeUser} placeholder="비밀번호 확인"/>
          {passwordTest ? '' : <p>영문 대문자와 소문자, 숫자, 특수문자 중<br/> 2가지 이상을 조합하여 6 ~ 20자로 입력해 주세요.</p>}
        </SignUpPasswordBox>
      </SignUpForm>
      <button className="registerbutton" onClick={handleLegister}>가입하기</button>
    </SignUpContainer>
  );
}

export default SignUp;