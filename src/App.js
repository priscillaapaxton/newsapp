import React from 'react';
import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { mockData } from './mockdata'
import './App.css';

import { StoryBrowser } from './StoryBrowser/StoryBrowser';
import { StoryPage } from './StoryPage/StoryPage';

function App() {
  const [stories, setStories] = useState([]);
  const [singleStory, setSingleStory] = useState('')
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [wrongPath, setWrongPath] = useState(false);

  useEffect(() => {
    setStories(mockData.articles)
    // getNewsData()
    // .then(stories => {
    //   console.log('newsData', stories.articles)
    //   setStories(stories.articles)
    // })
    // .catch(error => {
    //   console.log('error', error)
    //   setError(error)
    // })
  })

  const getTitle = (title) => {
    console.log('title', title)
    setSingleStory(title)
  }

  return (
      <div className="App">
        <Route exact path='/:url' render={()=> ( <StoryPage stories={stories} singleStory={singleStory} /> )}/>
        <Route exact path ='/' render={()=> ( <StoryBrowser stories={stories} getTitle={getTitle}/> )}/>
      </div>
  );
}

export default App;
