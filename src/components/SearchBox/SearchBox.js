import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './SearchBox.css';
import SearchIcon from '../../assets/search.svg';

import addSearchValue from '../../store/actions';


const SearchBox = ({search, addSearchValue, context}) => {
  const [searchValue, setSearchValue] = useState(search);
  const history = useHistory();

  const handleClickSearch = () => {
    addSearchValue(searchValue);
    if (searchValue !== '') {
      context === 'navigation' ? history.push(`${searchValue}`) : history.push(`category/${searchValue}`);
    }
  };

  const handleKeyPressSearch = (event) => {
    if (event.key === 'Enter') {
      addSearchValue(searchValue);
      if (searchValue !== '') {
        context === 'navigation' ? history.push(`${searchValue}`) : history.push(`category/${searchValue}`);
      }
    }
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };


  return (
    <div className='searchBox'>
      <input 
        id='search'
        className='input'
        placeholder='Search for free photos'
        type='search'
        onChange={handleInputChange}
        onKeyPress={handleKeyPressSearch}
      />
      <button 
        className='searchButton'
        onClick={handleClickSearch}
      >
        <img src={SearchIcon} alt='search'/>
      </button>
    </div>
  );
};


const mapStateToProps = state => ({ search: state.search });
const mapDispatchToProps = dispatch => {
  return {
    addSearchValue: value => dispatch(addSearchValue(value))
  };
};

SearchBox.propTypes = {
  addSearchValue: PropTypes.func,
  search: PropTypes.string,
  history: PropTypes.object,
  context: PropTypes.string
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);
