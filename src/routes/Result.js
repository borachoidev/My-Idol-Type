import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { infoList } from '../data.js';

function Result(props) {
  const { type } = useParams();
  const data = infoList[type - 1];
  return (
    <div>
      {data.name}
      <img src={data.img} alt={data.name} />
      {data.desc}
      {data.partner}

      <Link
        to={{
          pathname: `/`,
        }}
      >
        <button type="button">다시하기</button>
      </Link>
    </div>
  );
}

export default Result;
