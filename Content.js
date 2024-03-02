import React from 'react';

function Content({ src, alt, text }) {
  return (
    <div className="content">
      <img src={src} alt={alt} />
      <p>{text}</p>
    </div>
  );
}

export default Content;
