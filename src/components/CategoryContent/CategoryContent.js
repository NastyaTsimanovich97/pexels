import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { map, each, upperFirst } from 'lodash';
import { getCategoryPhotos } from '../../utils/getPhotos';
import InfiniteScroll from 'react-infinite-scroll-component';

import Photo from '../Photo';

import './CategoryContent.css';

const CategoryContent = ({categoryName}) => {
  const [photosUrl, setPhotosUrl] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const likedImages = JSON.parse(localStorage.getItem('likedImages'));

  useEffect(async () => {
    await handleLoadMore();
  },[]);

  const handleLoadMore = async() => {
    const result = await getCategoryPhotos(categoryName, currentPage + 1);
    setPhotosUrl((oldResults) => [...oldResults, ...result.photos]);
    setCurrentPage(currentPage + 1);
  };

  const renderPhotos = (photoArray) => (
    map(photoArray, (photo, index) => {
      const photoUrl = photo.src.large;
      const isLike = likedImages[photoUrl] ? likedImages[photoUrl] : false;
      return(
        <Photo 
          key={`photo-${index}`}
          photoUrl={photoUrl} 
          photographer={photo.photographer} 
          photographer_url={photo.photographer_url}
          isPhotoLiked={isLike}
        />
      );
    })
  );

  const renderPhotosGrid = () => {
    const firstColumn = [];
    const secondColumn  = [];
    const thirdColumn = [];
    each(photosUrl, (url, index) => {
      if (index===0 || index%3 === 0) {firstColumn.push(url);}
      else if (index===1 || (index-1)%3 === 0) {secondColumn.push(url);}
      else if (index===2 || (index-2)%3 === 0) {thirdColumn.push(url);}
    });
    return (
      <div className='photosContainer'>
        <div>
          {renderPhotos(firstColumn)}
        </div>
        <div>
          {renderPhotos(secondColumn)}
        </div>
        <div>
          {renderPhotos(thirdColumn)}
        </div>
      </div>
    );
  };

  return (
    <section className='categoryContainer'>
      <p className='categoryTitle'>{upperFirst(categoryName)}</p>
      <InfiniteScroll
        dataLength={photosUrl?.length}
        next={handleLoadMore}
        hasMore={10-currentPage !== 0}
        loader={<h4>Loading...</h4>}
      >
        {renderPhotosGrid()}
      </InfiniteScroll>
    </section>
  );
};

CategoryContent.propTypes = {
  categoryName: PropTypes.string,
};

export default CategoryContent;
