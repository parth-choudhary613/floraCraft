import React from 'react';
import './WallOfFame.css';
import image1 from '';  // Add your images here
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import image5 from './images/image5.jpg';
import image6 from './images/image6.jpg';
import image7 from './images/image7.jpg';
import image8 from './images/image8.jpg';

const WallOfFame = () => {
  return (
    <div className="wall-of-fame">
      <div className="image-container"><img src={image1} alt="" /></div>
      <div className="image-container"><img src={image2} alt="" /></div>
      <div className="image-container"><img src={image3} alt="" /></div>
      <div className="image-container"><img src={image4} alt="" /></div>
      <div className="image-container"><img src={image5} alt="" /></div>
      <div className="image-container"><img src={image6} alt="" /></div>
      <div className="image-container"><img src={image7} alt="" /></div>
      <div className="image-container"><img src={image8} alt="" /></div>
    </div>
  );
};

export default WallOfFame;
