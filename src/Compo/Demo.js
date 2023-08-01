import React, { useContext } from 'react';
import { ContextData } from './DataArticle';

function Demo() {
  const [DData] = useContext(ContextData);
  console.log(DData);
  return (
    <>
      {DData.filter((item) => item.cate === 'Technology').map((data) => (
        <h1 key={data.id}>{data.heading}</h1>
      ))}
    </>
  );
}

export default Demo;



