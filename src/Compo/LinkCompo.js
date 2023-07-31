// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import './Compo.css';

// function LinkCompo() {
//   return (
//     <>
//       <div className="navbar">
//         <NavLink to="/">
//           Home
//         </NavLink>
//         <NavLink to="/bollywood">
//           Bollywood
//         </NavLink>
//         <NavLink to="/technology">
//           Technology
//         </NavLink>
//         <NavLink to="/hollywood">
//           Hollywood
//         </NavLink>
//         <NavLink to="/fitness">
//           Fitness
//         </NavLink>
//         <NavLink to="/food">
//           Food
//         </NavLink>
//       </div>
//       <hr className='hrline'/>
//     </>
//   );
// }

// export default LinkCompo;

import React from 'react';
import { NavLink } from 'react-router-dom';
import './Compo.css';

function LinkCompo() {
  return (
    <>
      <div className="navbar">
        <NavLink exact={true} to="/" activeClassName="activeclassname">
          Home
        </NavLink>
        <NavLink to="/bollywood" activeClassName="activeclassname">
          Bollywood
        </NavLink>
        <NavLink to="/technology" activeClassName="activeclassname">
          Technology
        </NavLink>
        <NavLink to="/hollywood" activeClassName="activeclassname">
          Hollywood
        </NavLink>
        <NavLink to="/fitness" activeClassName="activeclassname">
          Fitness
        </NavLink>
        <NavLink to="/food" activeClassName="activeclassname">
          Food
        </NavLink>
      </div>
      <hr className='hrline'/>
    </>
  );
}

export default LinkCompo;
