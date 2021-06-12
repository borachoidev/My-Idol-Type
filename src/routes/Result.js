import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { infoList } from '../data.js';
import './Result.css';

function Result() {
  const { type } = useParams();
  const data = infoList[type - 1];
  return (
    <>
      <div className="result-box">
        <h1 className="result__title">{data.name}</h1>
        <img className="result__img" src={data.img} alt={data.name} />
        <p className="result__description">{data.desc}</p>
        <h3 className="result__partner__title">나와 캐미터지는 아이돌은 ?</h3>
        <span className="result__partner__result">{data.partner}</span>
      </div>
      <div className="buttons-box">
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
