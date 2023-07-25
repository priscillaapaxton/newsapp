import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import './StoryDetail.css';

import { useEffect, useState } from 'react';

// (headline, image, description if present, date)

export const StoryDetail = ({story}) => {
  const { headline, urlToImage, description, publishedAt, url } = story
  const toArray = url.split('').slice(29)
  const toPath = toArray.join('')

  return (
    
    <NavLink to={`/${toPath}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
      <div className='story-detail-card'>
        <p className='story-headline'>{headline}</p>
        <img className='story-image' src={urlToImage}/>
        <p className='story-description'>{description}</p>
        <p className='story-time'>{publishedAt}</p>
      </div>
    </NavLink>
  
  )
}