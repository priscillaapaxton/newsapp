import { Link } from 'react-router-dom';
import './StoryDetail.css';
// import { useGlobalState } from '../appState';

export const StoryDetail = ({story, viewStory}) => {
  // const { title, content, headline, urlToImage, description, publishedAt, url } = story
  // const toArray = url.split('').slice(29)
  // const toPath = toArray.join('')


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