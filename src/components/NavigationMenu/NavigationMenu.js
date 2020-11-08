import React from 'react';
import PropTypes from 'prop-types';

import Title from './Title';
import SearchBox from '../SearchBox';

import './NavigationMenu.css';
import Menu from '../../assets/menu.svg';

const NavigationMenu = ({context}) => {
  return(
    <nav className={context === 'category' ? 'navCategoryContainer' : 'navContainer'} >
      <Title />
      {context === 'category' && <SearchBox />}
      <ul className='linkContainer'>
        <li><a>Explore</a></li>
        <li><a>License</a></li>
        <li><a>Upload</a></li>
        <li><img src={Menu} className='menu' alt='menu'/></li>
        <li><button className='navButton'>Join</button></li>
      </ul>
    </nav>
  );
};

NavigationMenu.propTypes = {
  context: PropTypes.string
};

export default NavigationMenu;
