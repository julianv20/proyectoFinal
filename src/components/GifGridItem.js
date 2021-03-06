import React from 'react';

export const GifGridItem = ({ id, title, url }) => {
  return (
    <div className="card">
      <h5>{title}</h5>
      <img src={url} alt={title} />
    </div>
  );
};
