import React from 'react';

export default function ProductItemImages({ media = [] }) 
{
  let images = media.filter(el => el.type === 'image');
  if(images.length === 0) return null;
  
  return images.map((el, i) => (<img key={i} src={el.url} />));
}
