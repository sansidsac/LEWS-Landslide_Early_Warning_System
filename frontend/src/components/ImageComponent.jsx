import React from 'react';

const ImageComponent = ({ imgSrc }) => {
  return (
    <div className="overflow-auto rounded-2xl shadow-xl max-w-[500px] max-h-[300px]">
      <img 
        src={imgSrc} 
        alt="Scrollable content" 
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ImageComponent;
