import React from 'react';
import { Link } from 'react-router-dom';

function Home(props) {
  return (
    <div className="container">
      <h1>나의 아이돌 유형은 ?</h1>
      <p>나의 아이돌 유형을 확인하려면 "시작하기" 버튼을 눌러주세요!</p>
      <Link
        to={{
          pathname: `/test`,
        }}
      >
        <button type="button">시작하기</button>
      </Link>
    </div>
  );
}

export default Home;
