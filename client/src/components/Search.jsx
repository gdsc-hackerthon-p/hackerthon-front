import React, { useState } from 'react'
import styled from 'styled-components'

import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .inputsearch {
    position: relative;
    right: 60px;
    @media screen and (max-width:700px) {
      right: 40px;
    }
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
  @media screen and (max-width:700px) {
    padding-left: 20px;
  }
`

const Search = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState('');

  const handleChange = (e) => {
    setUser(e.target.value)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      navigate(`/detail/${user}`)
    }
  };

  const handleOnClick= (e) => {
    navigate(`/detail/${user}`)
  }

  return (
    <SearchContainer>
      <SearchInput value={user} onChange={handleChange} onKeyDown={handleKeyPress} placeholder='찾고 싶은 유저 검색'/>
      <FaSearch className='inputsearch' size={30} onClick={handleOnClick}/>
    </SearchContainer>
  )
}

export default Search