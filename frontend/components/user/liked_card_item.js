import React from 'react';

const LikedCardItem = ({item}) => (
  <div className="liked-card">
    <div className="liked-card-image" style={{backgroundImage: `url(${item.img_url})`}}></div>
    <div>
      
    </div>
  </div>
);

export default LikedCardItem;
