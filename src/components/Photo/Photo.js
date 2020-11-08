import React, {useState} from 'react';
import PropTypes from 'prop-types';
import PhotoModal from '../PhotoModal';

import './Photo.css';
import Like from '../../assets/like.svg';
import LikeRed from '../../assets/likeRed.svg';
import Collect from '../../assets/collect.svg';
import Close from '../../assets/close.svg';


const Photo = ({photoUrl, photographer, photographer_url, isPhotoLiked}) => {
  const [isHover, setIsHover] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(isPhotoLiked);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleLike = () => {
    isLiked ? setIsLiked(false) : setIsLiked(true);
    const likedImages = JSON.parse(localStorage.getItem('likedImages'));
    likedImages[photoUrl] = isLiked ? false : true;
    localStorage.setItem('likedImages', JSON.stringify(likedImages));
  };

  return (
    <article className='photoContainer' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={photoUrl} alt='photo' className='photoImg' onClick={handleImageClick} />
      <div className={isHover ? 'photoInfo' : 'photoInfoHidden'}>
        <a href={photographer_url} target='_blank' rel='noreferrer' className='photographer'>{photographer}</a>
        <div className='photoButton'>
          <img src={Collect} alt='collect' />
          <img src={isLiked ? LikeRed : Like} alt='like' onClick={handleLike} />
        </div>
      </div>
      {isModalOpen && 
        <PhotoModal id='photoModal'>
          <div className='modal'>
            <div className='photoModal'>
              <p className='photoModalTitle'>{photographer}</p>
              <div className='photoModalImg'>
                <img src={photoUrl} alt='photo-modal' />
              </div>
            </div>
            <div className='modalButton' onClick={handleCloseModal}>
              <img src={Close} alt='close' className='closeModalButton' />
            </div>
          </div>
        </PhotoModal>
      }
    </article>
  );
};

Photo.propTypes = {
  photoUrl: PropTypes.string, 
  photographer: PropTypes.string, 
  photographer_url: PropTypes.string,
  isPhotoLiked: PropTypes.bool
};

export default Photo;
