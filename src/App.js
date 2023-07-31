import React from 'react'
import RouteCompo from './Compo/RouteCompo'
import {BrowserRouter} from 'react-router-dom';
import LinkCompo from './Compo/LinkCompo';
import Headofweb from './Compo/Headofweb';


function App() {
  return (
    <>
    <Headofweb/>
     <BrowserRouter>
      <LinkCompo/>
      <RouteCompo/>
     </BrowserRouter>
    </>
  )
}

export default App
