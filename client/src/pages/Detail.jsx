import React from 'react'
import styled from 'styled-components';

import firstCrown from '../imgs/firstCrown.png';
import secondCrown from '../imgs/secondCrown.png';
import thirdCrown from '../imgs/thirdCrown.png';

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
  const point = 300;
  let userCrown;

  if (point >= 1000) {
    userCrown = <img src={firstCrown} alt="Second Crown" />;
  } else if (point >= 1000) {
    userCrown = <img src={secondCrown} alt="First Crown" />;
  } else {
    userCrown = <img src={thirdCrown} alt="Third Crown" />;
  }

  return (
    <DetailContainer>
      <DetailUserName>
        {userCrown}
        <h1>chan1911</h1>
      </DetailUserName>
      <DetailTable>
        <TableBox>
          <div><p>출석</p></div>
          <div><p>32</p></div>
        </TableBox>
        <TableBox>
          <div><p>커밋</p></div>
          <div><p>323</p></div>
        </TableBox>
        <TableBox>
          <div><p>포인트</p></div>
          <div><p>3211 pt</p></div>
        </TableBox>
      </DetailTable>

    </DetailContainer>
  )
}

export default Detail