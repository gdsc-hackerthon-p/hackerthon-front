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

const Knowledge1 = () => {
  return (
    <KnowledgeContainer>
      <h1>프로그래밍 언어는 왜 이렇게 많을까?</h1>
      <KnowledgeBox>
        <p>
          우리가 아는 파이썬, 자바스크립트, 씨언어 등 현재 프로그매잉 언어는 수백 개가 넘는다. 국가마다 언어가 다양하듯, 프로그래밍 언어도 다양하다.
          그 이유는 목적과 용도에 따라 특화된 프로그래밍 언어가 다르기 때문이다. 자신이 컴퓨터에게 무엇을 명령해서 어떤 작업을 할 지에 맞게 프로그래밍 언어를 선택할 수 있다.
          그림을 그릴 때 단순 스케치를 할 땐 연필을, 수채화를 그리고 싶으면 물감을 고르는 것처럼 목적에 따라 사용하는 언어가 다른 것으로 이해하자.
        </p>
      </KnowledgeBox>
    </KnowledgeContainer>
  )
}

export default Knowledge1