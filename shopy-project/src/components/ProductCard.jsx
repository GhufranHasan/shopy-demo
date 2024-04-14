import React from 'react';

const ProductCard = ({ imageSrc, productName, backgroundColor, height, width }) => {
  const cardStyle = {
    backgroundColor: backgroundColor,
    height: height,
    width: width,
  };

  return (
    <div className="product-card" style={cardStyle}>
      <img src={imageSrc} alt={productName} className="product-image" style={{ maxWidth: '100%', maxHeight: '100%' }} />
      <h4 className="product-name">{productName}</h4>
    </div>
  );
}

export default ProductCard;
