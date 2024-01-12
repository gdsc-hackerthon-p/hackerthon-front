import React, { useState } from 'react'
import styled from 'styled-components';
import { BottomSheet } from "react-spring-bottom-sheet";
import 'react-spring-bottom-sheet/dist/style.css';

import { FaAlignRight, FaAlignJustify, FaBookBookmark } from "react-icons/fa6";
import { ImHome } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
import { BsPersonSquare } from "react-icons/bs";
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import Search from './Search';
import LoginBtn from './LoginBtn';

const NavbarContainer = styled.div`
  position: fixed;
  right: 30px;
  z-index: 999;
`

const NavbarRigthBox = styled(animated.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 120px;
  width: 150px;
  height: 600px;
  padding: 20px;
  background-color: white;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  a {
    color: black;
  }
`

const Navbar = () => {
  const [clickBtn, setClickBtn] = useState(false);
  const [open, setOpen] = useState(false);

  const springProps = useSpring({
    transform: clickBtn ? 'translateX(-160px)' : 'translateX(150px)',
  });

  const handleOnClick = () => {
    setClickBtn(!clickBtn);
  }

  const handleGoPage = () => {
    setClickBtn(false);
  }

  const handleDismiss = () => {
    setClickBtn(false);
    setTimeout(() => {
      setOpen(!open)
    }, 400);
  }
  const handleDismiss2 = () => {
    setOpen(!open)
  }

  return (
    <NavbarContainer>
      {clickBtn ? <FaAlignRight onClick={handleOnClick} size={50}/> : <FaAlignJustify onClick={handleOnClick} size={50}/>}
      <NavbarRigthBox style={springProps}>
        <LoginBtn/>
        <Link to={'/'} onClick={handleGoPage}>
          <ImHome size={70}/>
        </Link>
        <Link to={'/myPages'} onClick={handleGoPage}>
          <BsPersonSquare size={70}/>
        </Link>
        <Link to={'/intro'} onClick={handleGoPage} >
          <FaBookBookmark size={70}/>
        </Link>
        <FaSearch size={70} onClick={handleDismiss}/>
      </NavbarRigthBox>
      <div>
        <BottomSheet 
          open={open}
          snapPoints={({ minHeight, maxHeight }) => [minHeight * 1, maxHeight * 0.25]}
          onDismiss={handleDismiss2}
        >
          <Search/>
        </BottomSheet>
      </div>

    </NavbarContainer>
  )
}

export default Navbar