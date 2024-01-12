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

const Knowledge4 = () => {
  return (
    <KnowledgeContainer>
      <h1>라이브러리와 프레임워크의 차이점</h1>
      <KnowledgeBox>
        <p>
          라이브러리는 무엇인가 만들고 싶을때 사용하는 도구 상자라고 생각하시면 됩니다. 
          필요할 때마다 이 도구들을 꺼내어 사용하고, 무엇을 만들지 자신이 결정합니다. 원하는 대로 사용할 수 있는 것이죠.
          프레임워크는 이미 완성된 집을 제공해주는 겁니다. 그 집안에서 어떤 문을 사용할 지, 어떤 벽을 이용할 지 정해진 규칙에 따라 사용합니다.
          간단히 말해, 라이브러리는 필요할 때 사용하는 도구 상자이고, 프레임워크는 이미 완성된 집을 제공해주어 그 안에서 작업을 해야 하는 것입니다.
        </p>
      </KnowledgeBox>
    </KnowledgeContainer>
  )
}

export default Knowledge4