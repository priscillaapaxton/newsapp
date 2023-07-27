import './StoryDetail.css';

export const StoryDetail = ({story}) => {

  return (
    <div className='story-detail-card'>
      <p className='story-title'>{story.title}</p>
      <p className='story-headline'>{story.headline}</p>
      <img className='story-image' src={story.urlToImage}/>
      <p className='story-description'>{story.description}</p>
      <p className='story-time'>{story.publishedAt}</p>
    </div>
  )
}