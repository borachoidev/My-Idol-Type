import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import img from '../image/main.png';
import './Home.css';

function Home() {
  return (
    <>
      <Helmet>
        <title>내가 아이돌로 데뷔한다면? | 아이돌 테스트 </title>
        <meta
          name="description"
          content="아이돌로 데뷔한다면 나는 어떤 아이돌? 아이돌 유형 테스트로 알아보자!"
        />
        <meta name="keywords" content="아이돌유형,아이돌mbti,아이돌테스트" />
        <meta
          property="og:title"
          content="내가 아이돌로 데뷔한다면? | 아이돌 테스트"
        />
        <meta
          property="og:description"
          content="아이돌로 데뷔한다면 나는 어떤 아이돌? 아이돌 유형 테스트로 알아보자!"
        />
        <meta property="og:image" content={img} />
      </Helmet>
      <div className="main">
        <h1 className="main__title">나의 아이돌 유형은 ?</h1>
        <p className="main__description">
          한국을 넘어서 전 세계사람들의 마음을 사로잡은 K-pop 아이돌!
          <br />
          내가 만약 데뷔를 한다면 나는 어떤 아이돌일까 ? <br />
          지금 나의 아이돌 유형을 확인하려면 <b>"시작하기"</b> 버튼을
          눌러주세요!
        </p>
        <img className="main__img" src={img} alt="메인이미지" />
      </div>

      <Link
        to={{
          pathname: `/test`,
        }}
      >
        <button type="button" className="start-btn">
          시작하기
        </button>
      </Link>
    </>
  );
}

export default Home;
