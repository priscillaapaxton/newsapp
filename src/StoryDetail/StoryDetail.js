import './StoryDetail.css';

export const StoryDetail = ({story}) => {
    const datePart = story.publishedAt.slice(0, 10)
    const parts = datePart.split("-"); 
    const year = parseInt(parts[0]);
    const month = parseInt(parts[1]);
    const day = parseInt(parts[2]);
    const dateObj = new Date(year, month - 1, day); 
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = dateObj.toLocaleDateString("en-US", options);

  return (
    <div className='story-detail-card'>
      <p className='story-title'>{story.title}</p>
      <img className='story-image' src={story.urlToImage} alt='alt-tag'/>
      <p className='story-description'>{story.description}</p>
      <p className='story-time'>{formattedDate}</p>
    </div>
  )
}