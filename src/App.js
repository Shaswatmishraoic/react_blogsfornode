import React, { useState } from 'react';
import RouteCompo from './Compo/RouteCompo';
import { BrowserRouter } from 'react-router-dom';
import LinkCompo from './Compo/LinkCompo';
import Headofweb from './Compo/Headofweb';
import { DataArticle } from './Compo/DataArticle';


function App() {
  const [isLinkCompoVisible] = useState(true);

  return (
    <BrowserRouter>
      <DataArticle> 
        <Headofweb />
        <LinkCompo isVisible={isLinkCompoVisible} />
        <RouteCompo />
      </DataArticle>
    </BrowserRouter>
  );
}

export default App;
