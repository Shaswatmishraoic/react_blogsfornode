import React from 'react';
import './Compo.css'
import { useNavigate, NavLink } from 'react-router-dom';

function Newnav() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <nav className='newnav'>
        <NavLink to="/" className={'gohome'}>
        <div>
          <span className='the1'>The</span>
          <span className='siren1'>Siren</span>
        </div>
        </NavLink>
        <button className='backbutton' onClick={handleGoBack}>Go Back</button>
      </nav>
      
    </div>
  );
}

export default Newnav;
