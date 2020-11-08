import { createClient } from 'pexels';

const client = createClient('563492ad6f917000010000012bd453a1aa0c4f46b6567b0b809a5075');

export const getBackgroundImage = async () => {
  const query = 'Beautiful Landscapes';
  const photoId = Math.floor(Math.random() * Math.floor(80));
  try {
    let backgroundImage;
    await client.photos.search({ query, per_page: 80 }).then(photo => {
      backgroundImage = photo.photos[photoId];
    });
    return backgroundImage;
  } catch (error) {
    console.log(error);
  }
};

export const getCategoryPhotos = async (query, page) => {
  try {
    let backgroundImage;
    await client.photos.search({ query, per_page: 32, page: page }).then(photo => {
      backgroundImage = photo;
    });
    return backgroundImage;
  } catch (error) {
    console.log(error);
  }
};
