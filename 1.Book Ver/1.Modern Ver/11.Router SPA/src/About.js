import React from 'react';
import qs from 'qs';

const About = ({location}) =>{
  const query = qs.parse(location.search,{
    ignoreQueryPrefix:false// 문자열 앞 ? 생략 처리
  });

  const showDetail = query.detail==='false';

  return(
    <div>
      <h1>소개</h1>
      <p>Introduce</p>
      {!showDetail && <p>detail value false</p>}
    </div>
  )
}

export default About;