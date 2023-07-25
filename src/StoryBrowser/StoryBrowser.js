import './StoryBrowser.css';
import { useEffect, useState } from 'react';
import { mockData } from '../mockdata';
import { StoryDetail } from '../StoryDetail/StoryDetail';

export const StoryBrowser = () => {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [wrongPath, setWrongPath] = useState(false);

  useEffect(() => {
    setStories(mockData.articles)
  })

  console.log('mockdata', stories)

  return (
    <div className='story-card-container'>
      {stories.map((story) => {

       return <StoryDetail story={story} />
      })}
    </div>
  )
}

