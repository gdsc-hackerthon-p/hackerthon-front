import React from 'react'
import styled from 'styled-components';

import firstCrown from '../imgs/firstCrown.png';
import secondCrown from '../imgs/secondCrown.png';
import thirdCrown from '../imgs/thirdCrown.png';

const DetailContainer = styled.div`
  
`

const DetailUserName = styled.div`
  display: flex;
  align-items: center;
`

const DetailTable = styled.div`
  
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
        <img src={userCrown} alt="#"/>
        <h1>chan1911</h1>
      </DetailUserName>
      <DetailTable>
        
      </DetailTable>

    </DetailContainer>
  )
}

export default Detail