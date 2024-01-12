import React from 'react';

import testImg from '../imgs/testImg.png';

class MyPage extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '45%', padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src={testImg} alt="프로필 사진" style={{ width: '50%' }} />
          <h2 style ={{padding: '30px'}}>홍길동</h2>
          <h4 style ={{padding: '30px'}}>20일째 커밋하고 있어요!</h4>
          <div style={{ width: '45%', border: '1px solid black', padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3>내 포인트</h3>
            <h2>1000점</h2>
          </div>
        </div>
        <div style={{ width: '40%' }}>
          <h3 style ={{padding: '10px'}}>당신의 라이벌</h3>
          <table style={{ width: '100%', borderColgitlapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }}>이름</th>
                <th style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }}>포인트</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }}>이몽룡</td>
                <td style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }}>1500점</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default MyPage;
