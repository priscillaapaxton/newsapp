import './StoryBrowser.css';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { StoryDetail } from '../StoryDetail/StoryDetail';

export const StoryBrowser = ({stories, getTitle}) => {

  // const viewStory = (article) => {
  //   setSingleStory(article)
  // }
  // console.log('story updated', singleStory)
  // const { title, content, headline, urlToImage, description, publishedAt, url } = story

  const handleClick = (title) => {
    getTitle(title)
  }
  return (
    <div className='story-card-container'>
      {stories.map((story) => {
        
        const toArray = story.url.split('').slice(29)
        const toPath = toArray.join('')
       return (
        <NavLink 
        to={`/${toPath}`} 
        onClick={() => handleClick(story.title)} 
        style={{ color: 'inherit', textDecoration: 'inherit'}}>
          <div className='story-detail-card'>
            <p className='story-headline'>{story.headline}</p>
            <img className='story-image' src={story.urlToImage}/>
            <p className='story-description'>{story.description}</p>
            <p className='story-time'>{story.publishedAt}</p>
          </div>
        </NavLink> 
        )
      })}
    </div>
  )
}

