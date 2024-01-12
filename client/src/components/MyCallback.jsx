import React from 'react'
import { useLocation } from 'react-router-dom';

const MyCallback = () => {

  const location = useLocation();

    // location 객체에서 search 속성을 통해 query string을 가져옴
    const queryParams = new URLSearchParams(location.search);
  
    // 특정 키에 해당하는 query 값을 가져오기
    const myParam = queryParams.get('code');

  return (
    <div>{myParam}</div>
  )
}

export default MyCallback