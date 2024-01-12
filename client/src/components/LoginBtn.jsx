import React from 'react'
import styled from 'styled-components'

import { IoLogInOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const SignUpBtn = styled(Link)`
  outline: none;
  border: none;
  margin-right: 30px;
  width: 80px;
  background-color: transparent;
  cursor: pointer;
`

const LoginBtn = () => {

  return (
    <SignUpBtn to={'/signup'}><IoLogInOutline size={80}/></SignUpBtn>
  )
}

export default LoginBtn