import React, { useContext } from 'react';
import { Store } from './DataArticle';

function Demo() {
  const [DData] = useContext(Store);
  console.log(DData);
  return (
    <>
      {DData.filter((item) => item.cate === 'Technology').map((data) => (
        <h1>{data.heading}</h1>
      ))}
    </>
  );
}

export default Demo;


