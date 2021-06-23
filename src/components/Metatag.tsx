import React from 'react';
import { Helmet } from 'react-helmet';

function Metatag({title, description, image}:any) {
    return (
        <Helmet>
                <title>{title} | 아이돌 테스트</title>
        <meta
          name="description"
          content={description}
          data-react-helmet="true"
        />
        <meta
          name="keywords"
          content="아이돌유형,아이돌mbti,아이돌테스트,mitt"
          data-react-helmet="true"
        />
        <meta
          property="og:title"
          content={ title +'| MITT 내아이돌유형테스트'} 
          data-react-helmet="true"
        />
        <meta property="og:type" content="article" data-react-helmet="true" />
        <meta
          property="og:site_name"
          content="MITT 내아이돌유형테스트"
          data-react-helmet="true"
        />
        <meta
          property="og:description"
          content={description}
          data-react-helmet="true"
        />
        <meta property="og:image" content={image} data-react-helmet="true" />
        <script
          type="text/javascript"
          src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-60ca01f6b5f03663"
        />
        </Helmet>
    );
}

export default Metatag;