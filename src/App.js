import React from 'react';
import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { mockData } from './mockdata'
import { getNewsData }from './apicalls'
import './App.css';

import { Header } from './Header/Header';
import { StoryBrowser } from './StoryBrowser/StoryBrowser';
import { StoryPage } from './StoryPage/StoryPage';
import { ServerError } from './ServerError/ServerError';

function App() {
  const [stories, setStories] = useState([]);
  const [displayedStories, setDisplayedStories] = useState([])
  const [singleStory, setSingleStory] = useState(false)
  const [error, setError] = useState('');

  useEffect(() => {
    setStories(mockData.articles)
    setDisplayedStories(mockData.articles)
    // getNewsData()
    // .then(stories => {
    //   console.log('newsData', stories.articles)
    //   setStories(stories.articles)
    //   setDisplayedStories(stories.articles)
    // })
    // .catch(error => {
    //   setError(error.message)
    // })
  }, [])

  const getStory = () => {
    setSingleStory(true)
  }

  const clearSetStory = () => {
    setSingleStory(false)
  }

  const changeDisplayedStories = (input) => {
    const toDisplay = stories.filter((story) => {
    const title = story.title.toLowerCase()
    return title.includes(input)
  })
    setDisplayedStories(toDisplay)
  }

  const resetDisplayedStories = () => {
    setDisplayedStories(stories)
  }

  if (error.length) {
    return ( <ServerError /> )
  }

  return (
    <>
      <Header 
      singleStory={singleStory}
      clearSetStory={clearSetStory}
      changeDisplayedStories={changeDisplayedStories}
      />
      <div className="App">
        <Switch>
          <Route exact path='/:url' render={({match})=>  {
            const url = match.url
            return (
            <StoryPage 
              path={url}
              stories={stories} 
              getStory={getStory}
            /> )} }/>
          <Route exact path ='/' render={()=> ( <StoryBrowser 
          displayedStories={displayedStories} 
          getStory={getStory}
          resetDisplayedStories={resetDisplayedStories}
          clearSetStory={clearSetStory}
          /> )}/>
        </Switch>
      </div>
    </>
  );
}

export default App;
