import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { infoList } from '../data.js';
import './Result.css';

function Result() {
  const { type } = useParams();
  const data = infoList[type - 1];

  useEffect(() => {
    let ins = document.createElement('ins');
    let scr = document.createElement('script');

    ins.className = 'kakao_ad_area';
    ins.style = 'display:none; width:100%;';
    scr.async = 'true';
    scr.type = 'text/javascript';
    scr.src = '//t1.daumcdn.net/kas/static/ba.min.js';
    ins.setAttribute('data-ad-width', '320');
    ins.setAttribute('data-ad-height', '50');
    ins.setAttribute('data-ad-unit', 'DAN-iNS6cTHEaa2gLNKW');

    document.querySelector('.adfit').appendChild(ins);
    document.querySelector('.adfit').appendChild(scr);
  }, []);

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
      <div className="adfit"></div>
    </>
  );
}

export default Result;
