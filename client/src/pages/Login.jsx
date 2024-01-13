import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  flex-direction: column;

  h1 {
    margin: 20px 0px;
  }

  div {
    margin: 10px 0;
    label {
      margin-right: 250px;
      display: block;
      margin-bottom: 5px;
    }

    input {
    background-color : #c6c6c6;
      width: 300px;
      height : 30px ;
      padding: 10px;
      border: none; 
      border-radius: 10px;
    }

    ::placeholder {
        color: #020202;
    }
  }
`
const LoginButton = styled.button`
  background-color: #000000;
  border: none;
  color: white;
  padding: 10px 130px;
  height:50px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 100px 2px;
  cursor: pointer;
  border-radius: 10px; 

  
  &:hover {
    background-color: #7e7e7e;
    color: black;
  }
`

function Login() {

  const navigate = useNavigate();

    const [inputs, setInputs] = useState({
      username: '',
      password: '',
    });

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    };

    const createMutation = useMutation({
      mutationKey: ['userLogin'],
      mutationFn:(newLogin) => { return axios.post('http://localhost:4000/login', newLogin)},
      onSuccess: e => {
        localStorage.setItem('user', e.data[0].username)
        navigate('/')
      },
      onError: e => {
        console.log(e)
      }
    })

  const handleSubmit = (e) => {
    e.preventDefault();
    createMutation.mutate(inputs)
  };

  const handleOnClick = () => {
    navigate('/signup')
  }

    return (
      <LoginContainer>
        <h1>로그인</h1>
        <hr/>

        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">아이디</label>
        </div>
        <div>
        <input 
            type='text' 
            id="username" 
            name="username"
            value={inputs.username}
            onChange={handleInputChange}
            placeholder='아이디'/>
        </div>

        <div>
            <label htmlFor="password">비밀번호</label>
        </div>
        <div>
        <input 
            type='password' 
            id="password" 
            name="password"
            value={inputs.password}
            onChange={handleInputChange}
            placeholder='비밀번호'/>
        </div>

        <LoginButton type = "submit" id="login">로그인</LoginButton>
        </form>

        <p>계정이 없으신가요? <button onClick={handleOnClick}> 회원가입</button></p>
        </LoginContainer>
    );
}

export default Login;