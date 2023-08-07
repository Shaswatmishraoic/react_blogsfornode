import React from 'react';
import { NavLink } from 'react-router-dom';
import './Compo.css';

function LinkCompo({ isVisible }) {
  return (
    <>
      <section style={{ display: isVisible ? 'block' : 'none' }}>
        <div className="navbar">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/bollywood">Bollywood</NavLink>
          <NavLink to="/technology">Technology</NavLink>
          <NavLink to="/hollywood">Hollywood</NavLink>
          <NavLink to="/fitness">Fitness</NavLink>
          <NavLink to="/food">Food</NavLink>
        </div>
      </section>
      <hr className='hrline'/>
    </>
  );
}


export default LinkCompo;