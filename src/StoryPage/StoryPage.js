import { useEffect } from 'react';
import './StoryPage.css'

export const StoryPage = ({path, stories, getStory}) => {
  const storyToDisplay = stories.find((story) => story.url.includes(path))

  useEffect(() => {
    getStory()
  })

  if (!stories.length) {
    return ( <p>loading</p> );
  } else if (storyToDisplay === undefined) {
    return ( <p>uh-oh nothing here!</p> )
  }

  return (
    <div className='story-page'>
      <div className='story-container'>
        <p className='story-content'>{storyToDisplay.content}</p>
        <p className='story-author'>author: {storyToDisplay.author}</p>
        <a href={storyToDisplay.url}>Read full article here</a>
      </div>
    </div>
  )
}