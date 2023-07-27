import './StoryBrowser.css';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { StoryDetail } from '../StoryDetail/StoryDetail';

export const StoryBrowser = ({displayedStories, getStory, resetDisplayedStories, clearSetStory}) => {

  useEffect(() => {
    clearSetStory()
  })

  const handleClick = () => {
    getStory()
    resetDisplayedStories()
  }
  return (
    <div className='story-card-container'>
      {displayedStories.map((story) => {
        
        const toArray = story.url.split('').slice(29)
        const toPath = toArray.join('')
       return (
        <NavLink 
        to={`/${toPath}`} 
        onClick={() => handleClick(story)} 
        style={{ color: 'inherit', textDecoration: 'inherit'}}>
          <StoryDetail story={story} />
        </NavLink> 
        )
      })}
    </div>
  )
}

