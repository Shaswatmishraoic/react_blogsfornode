// import React from 'react';
// import RouteCompo from './Compo/RouteCompo';
// import { BrowserRouter } from 'react-router-dom';
// import LinkCompo from './Compo/LinkCompo';
// import Headofweb from './Compo/Headofweb';
// import { ContextData } from './Compo/DataArticle';

// function App() {
//   return (
//     <>
//       <Headofweb />
//       <BrowserRouter>
//         <ContextData>
//           <LinkCompo />
//           <RouteCompo />
//         </ContextData>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;
import React from 'react';
import RouteCompo from './Compo/RouteCompo';
import { BrowserRouter } from 'react-router-dom';
import LinkCompo from './Compo/LinkCompo';
import Headofweb from './Compo/Headofweb';
import { DataArticle } from './Compo/DataArticle'; // Use named import

function App() {
  return (
    <>
      <Headofweb />
      <DataArticle> {/* Wrap the components in DataArticle provider */}
        <BrowserRouter>
          <LinkCompo />
          <RouteCompo />
        </BrowserRouter>
      </DataArticle>
    </>
  );
}

export default App;
