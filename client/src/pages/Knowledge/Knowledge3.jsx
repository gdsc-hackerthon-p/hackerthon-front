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

const Knowledge3 = () => {
  return (
    <KnowledgeContainer>
      <h1>API 문서는 왜 있죠?</h1>
      <KnowledgeBox>
        <p>
          API 문서는 쉽게 말해, 요청을 하고 응답을 받기 위해 정의된 룰 같은 거라고 생각하면 된다.
          사람-컴퓨터, 기계-기계 뿐 아니라, 소프트웨어와 소프트웨어 사이에서도 수많은 의사소통이 일어나고 있다. 
          컴퓨터 시스템끼리 정보를 교환할 수 있게 하는 형식 혹은 창구가 API 이다. 코드들끼리 서로 소통하기 위해
          지정된 형식으로 명령, 요청할 수 있는 수단이 필요하기 때문에 API 문서가 있는 것이다.
        </p>
      </KnowledgeBox>
    </KnowledgeContainer>
  )
}

export default Knowledge3