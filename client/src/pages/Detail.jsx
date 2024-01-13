import React from 'react'
import styled from 'styled-components';

import firstCrown from '../imgs/firstCrown.png';
import secondCrown from '../imgs/secondCrown.png';
import thirdCrown from '../imgs/thirdCrown.png';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

const DetailContainer = styled.div`
  margin-top: 30px;
  padding: 100px 30px 0px;
`

const DetailUserName = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 30px;
  border-bottom: 1px solid #D9D9D9;
  h1 {
    font-size: 5rem;
  }
  img {
    margin-right: 30px;
  }
`

const DetailTable = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`

const TableBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    font-size: 2rem;
    border: 1px solid black;
  }
`

const Detail = () => {

  const {name} = useParams();

  const fetchData = async() => {
    const res = await axios.get(`http://localhost:4000/userdetail?usernickname=${name}`);
    return res.data;
  }

  const {data} = useQuery({
    queryKey: ['userDetail'],
    queryFn: fetchData
  })

  const point = data?.commit;
  let userCrown;

  if (point >= 1000) {
    userCrown = <img src={secondCrown} alt="Second Crown" />;
  } else if (point >= 1000) {
    userCrown = <img src={firstCrown} alt="First Crown" />;
  } else {
    userCrown = <img src={thirdCrown} alt="Third Crown" />;
  }

  return (
    <DetailContainer>
      {data?.map(item => (
        <>
        <DetailUserName>
          {userCrown}
          <h1>{item.username}</h1>
        </DetailUserName>
        <DetailTable>
          <TableBox>
            <div><p>깃허브이메일</p></div>
            <div><p>{item.githubId}</p></div>
          </TableBox>
          <TableBox>
            <div><p>커밋</p></div>
            <div><p>{item.commit}</p></div>
          </TableBox>
          <TableBox>
            <div><p>닉네임</p></div>
            <div><p>{item.nickname}</p></div>
          </TableBox>
        </DetailTable>
        </>
      ))}

    </DetailContainer>
  )
}

export default Detail