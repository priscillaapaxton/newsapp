import './StoryPage.css'

export const StoryPage = ({stories, singleStory}) => {

  // const object = stories.find((story) => story.title === singleStory)
  return (
    <div>
      <p className='story content'>{singleStory.content}</p>
      <p className='story-author'>author{singleStory.author}</p>
      <a href='https://www.wsj.com/articles/its-time-to-bring-back-the-asylum-ec01fb2'>Read full article here</a>
    </div>
  )
}