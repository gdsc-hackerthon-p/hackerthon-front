import React, { useState } from 'react'
import styled from 'styled-components'

import { FaSearch } from "react-icons/fa";

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .inputsearch {
    position: relative;
    right: 60px;
  }
`

const SearchInput = styled.input`
  outline: none;
  border: none;
  width: 40%;
  margin: 50px 0px;
  padding: 20px 60px;
  border-radius: 15px;
  background-color: aliceblue;
  font-size: 2rem;
  @media screen and (max-width:1000px) {
    font-size: 24px;
  }
  @media screen and (max-width:700px) {
    font-size: 1rem;
  }
`

const Search = () => {

  const [user, setUser] = useState('');

  const handleChange = (e) => {
    setUser(e.target.value)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      // Enter 키를 눌렀을 때 특정 작업 수행
    }
  };

  const handleOnClick= (e) => {
  }

  return (
    <SearchContainer>
      <SearchInput value={user} onChange={handleChange} onKeyDown={handleKeyPress} placeholder='찾고 싶은 유저를 검색하세요.'/>
      <FaSearch className='inputsearch' size={40} onClick={handleOnClick}/>
    </SearchContainer>
  )
}

export default Search