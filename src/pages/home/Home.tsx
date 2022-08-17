import React from 'react';
import { homeImages } from '../../data/images';
import { useImage } from '../../hooks/useImage';

export const Home = () => {
  return (
    <div>
      <img src={useImage(homeImages.background)} alt="xd" />
    </div>
  );
};
