import React, { useEffect, useState } from 'react';
import { map } from 'lodash';
import { Link } from 'react-router-dom';
import SearchBox from '../SearchBox';
import { getBackgroundImage } from '../../utils/getPhotos';
import getSuggestions from '../../utils/getSuggestions';

import './Header.css';


const Header = () => {
  const [backgroundUrl, setBackgroundUrl] = useState();
  const [photographerData, setPhotographerData] = useState();

  useEffect(async () => {
    const imageData = await getBackgroundImage();
    const url = imageData.src.landscape;
    const photographer = imageData.photographer;
    const photographerUrl = imageData.photographer_url;
    console.log(imageData);
    setBackgroundUrl(url);
    setPhotographerData({
      name: photographer,
      url: photographerUrl
    });
  }, []);
  
  const renderSugestions = () => {
    const suggestions = getSuggestions();
    return map(suggestions, (suggest, index) => (
      <li key={`suggest-${index}`}>
        <Link to={`category/${suggest}`} className='sugestionLinks'>{suggest}</Link>
      </li>
    ));
  };

  return(
    <header className='header'>
      <div className='headerBackground'>
        <img className='headerBackgroundImg' src={backgroundUrl} alt='background'/>
      </div>
    
      <section className='searchContainer'>
        <h2 className='searchTitle'>
          The best free stock photos shared by talented creators.
        </h2>
        <SearchBox />
        <div className='suggestionsContainer'>
          <p className='searchSuggest'>
            Suggested: 
          </p>
          <ul className='sugestionList'>
            {renderSugestions()}
          </ul>
        </div>
      </section>
      <p className='photographerLink'>
        <a href={photographerData?.url} target='_blank' rel='noreferrer'>Photo by {photographerData?.name}</a>
      </p>
    </header>
  );
};

export default Header;
