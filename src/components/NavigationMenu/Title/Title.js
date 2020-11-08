import React from 'react';
import Logo from '../../../assets/logo.svg';
import { useHistory } from 'react-router-dom';

import './Title.css';

const Title = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/');
  };

  return(
    <div className='logoContainer' onClick={handleClick}>
      <img src={Logo} className='logo' alt='logo-pexels'/>
      <h1 className='title'>Pexels</h1>
    </div>
  );
};

export default Title;
