import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { map, slice, upperFirst } from 'lodash';
import { getCategoryPhotos } from '../../utils/getPhotos';
import InfiniteScroll from 'react-infinite-scroll-component';

import Photo from '../Photo';

import './CategoryContent.css';

const CategoryContent = ({categoryName}) => {
  const [photosUrl, setPhotosUrl] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const likedImages = JSON.parse(localStorage.getItem('likedImages'));

  useEffect(async () => {
    const result = await getCategoryPhotos(categoryName, 1);
    setPhotosUrl(() => [...result.photos]);
    setCurrentPage(currentPage + 1);
  },[]);

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

  const handleLoadMore = async() => {
    const result = await getCategoryPhotos(categoryName, currentPage + 1);
    setPhotosUrl(() => [...result.photos]);
    setCurrentPage(currentPage + 1);
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
        <div className='photosContainer'>
          <div>
            {renderPhotos(slice(photosUrl, 0, 10))}
          </div>
          <div>
            {renderPhotos(slice(photosUrl, 11, 21))}
          </div>
          <div>
            {renderPhotos(slice(photosUrl, 22, 32))}
          </div>
        </div>
      </InfiniteScroll>
    </section>
  );
};

CategoryContent.propTypes = {
  categoryName: PropTypes.string,
};

export default CategoryContent;
