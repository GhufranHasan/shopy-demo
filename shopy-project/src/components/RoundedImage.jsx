import React from 'react';

const RoundedImage = ({ src, alt, height, width }) => {
  return (
    <div className="rounded-image" style={{ height, width }}>
      <img src={src} alt={alt} />
    </div>
  );
}

export default RoundedImage;
