import React, { useState } from 'react'
import styled from 'styled-components';

import { FaAlignRight, FaAlignJustify } from "react-icons/fa6";
import { useSpring, animated } from 'react-spring';

const NavbarContainer = styled.div`
  position: fixed;
  right: 30px;
`

const NavbarRigthBox = styled(animated.div)`
  position: absolute;
  top: 120px;
  width: 300px;
  height: 600px;
  padding: 20px;
  background-color: white;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
`

const Navbar = () => {
  const [clickBtn, setClickBtn] = useState(false);

  const springProps = useSpring({
    transform: clickBtn ? 'translateX(-280px)' : 'translateX(150px)',
  });

  const handleOnClick = () => {
    setClickBtn(!clickBtn)
  }
  return (
    <NavbarContainer>
      {clickBtn ? <FaAlignRight onClick={handleOnClick} size={50}/> : <FaAlignJustify onClick={handleOnClick} size={50}/>}
      <NavbarRigthBox style={springProps}>
        hello
      </NavbarRigthBox>
    </NavbarContainer>
  )
}

export default Navbar