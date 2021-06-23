import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { infoList } from '../data.js';
import Metatag from "../components/Metatag";
import './Result.css';

function Result() {
  const { type }: any = useParams();
  type datas = {
    name: string,
    desc: string,
    partner: string,
    img: string,
    og: string,
  }
  const data:datas = infoList[parseInt(type) - 1];

  return (
    <>
    <Metatag title="결과 보기" description={data.name +'| 나의 아이돌 유형 알아보기'} image={data.og}/>

      <div className="result-box">
        <h1 className="result__title">{data.name}</h1>
        <img className="result__img" src={data.img} alt={data.name} />
        <p className="result__description">{data.desc}</p>
        <h3 className="result__partner__title">나와 캐미터지는 아이돌은 ?</h3>
        <span className="result__partner__result">{data.partner}</span>
      </div>
      <div className="buttons-box">
        <div className="addthis_inline_share_toolbox_eab3"></div>
        <Link
          to={{
            pathname: `/`,
          }}
        >
          <button className="restart-btn" type="button">
            다시하기
          </button>
        </Link>
      </div>
    </>
  );
}

export default Result;
