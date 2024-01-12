import React from 'react'
import styled from 'styled-components'

import { IoLogInOutline } from "react-icons/io5";

const GithubBtn = styled.button`
  outline: none;
  border: none;
  margin-right: 30px;
  width: 80px;
  background-color: transparent;
  cursor: pointer;
`

const LoginBtn = () => {
  const clientId = 'ec2afdf98094bf46cfe3';
  const redirectUrl = 'http://localhost:3000/callback'
  const githubURL = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}`
  const handleLogin = ()=>{
      window.location.href = githubURL
  }

  return (
    <GithubBtn onClick={handleLogin}><IoLogInOutline size={80}/></GithubBtn>
  )
}

export default LoginBtn