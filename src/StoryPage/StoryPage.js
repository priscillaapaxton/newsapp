import { useEffect, useState } from 'react';
import './StoryPage.css'

export const StoryPage = ({path, stories, singleStory}) => {
  const [toBeDisplayed, setToBeDisplayed] = useState({});
  const storyToDisplay = stories.find((story) => story.url.includes(path))

  useEffect(() => {
    setToBeDisplayed(storyToDisplay)
  })


  return (
    <div className='story-page'>
      {!stories.length ? ( <p>loading</p> ) : (<div className='story-container'>
        <p className='story-content'>{storyToDisplay.content}</p>
        <p className='story-author'>author: {storyToDisplay.author}</p>
        <a href={storyToDisplay.url}>Read full article here</a>
      </div>
      )}
    </div>
  )
}