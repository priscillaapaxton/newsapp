import { useEffect, useState } from 'react';
import './StoryPage.css'

export const StoryPage = ({path, stories, singleStory}) => {
  const [toBeDisplayed, setToBeDisplayed] = useState({});
  const storyToDisplay = stories.find((story) => story.url.includes(path))
  // const { content, author, url } = storyToDisplay

  useEffect(() => {
    setToBeDisplayed(storyToDisplay)
  })
  console.log('obj', stories.find((story) => story.url.includes(path)))
  console.log('newvariable', storyToDisplay)
  return (
    <div>
      <p className='story content'>{storyToDisplay.content}</p>
      <p className='story-author'>author{storyToDisplay.author}</p>
      <a href={storyToDisplay.url}>Read full article here</a>
    </div>
  )
}