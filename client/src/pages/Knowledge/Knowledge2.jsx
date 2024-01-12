import React from 'react'
import styled from 'styled-components'

const KnowledgeContainer = styled.div`
  height: 100vh;
  h1 {
    margin-top: 30px;
    padding-top: 30px;
    text-align: center;
  }
`

const KnowledgeBox = styled.div`
  width: 50%;
  height: 500px;
  margin: 120px auto 0px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  p {
    font-size: 40px;
    line-height: 44px;
  }
`

const Knowledge2 = () => {
  return (
    <KnowledgeContainer>
      <h1>왜 프로그래밍 언어는 계속 업데이트 될까?</h1>
      <KnowledgeBox>
        <p>
          프로그래밍 언어의 발전에 대한 견해를 한 마디로 정리하면 '효율성의 증대' 이다. 세계는 비효율보단 효율을 추구하며 발전해왔다.
          프로그래밍 언어도 마찬가지다. 기계와 소통을 하게 된 것 자체로도 엄청난 혁신이었지만 그 후로도 '더 효율적인 프로그래밍 언어'에 대한 고민을 끊임없이 해왔고,
          그에 대한 결과로 더 쉽게, 빠르게, 원할하게 컴퓨터와 소통할 수 있는 방향으로 프로그래밍 언어도 발전되는 것이다.

        </p>
      </KnowledgeBox>
    </KnowledgeContainer>
  )
}

export default Knowledge2