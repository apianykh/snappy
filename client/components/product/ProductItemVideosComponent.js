import React from 'react';

export default function ProductItemImages({ media = [] }) 
{
  let videos = media.filter(el => el.type === 'video');
  if(videos.length === 0) return null;
  videos.map((el, i) => (<img key={i} src={el.url} />))

  return (
    <div className="extra content">
      {videos.map((el, i) => (
        <a key={i} href={el.url} target="_blank" rel="noopener noreferrer">
          <i className="video icon" />
          Watch Video
        </a>
      ))}
    </div>
  );
}
