import './StoryPage.css'

export const StoryPage = ({stories, singleStory}) => {
  console.log('singleStory', stories, singleStory)
  const object =stories.find((story) => story.title === singleStory)
  console.log(object.content)
  return (
    <div>
      <p>{object.content}</p>
    </div>
  )
}