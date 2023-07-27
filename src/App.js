import React from 'react';
import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { mockData } from './mockdata'
import './App.css';

import { Header } from './Header/Header';
import { SearchBar } from './SearchBar/SearchBar';
import { StoryBrowser } from './StoryBrowser/StoryBrowser';
import { StoryPage } from './StoryPage/StoryPage';

function App() {
  const [stories, setStories] = useState([]);
  const [displayedStories, setDisplayedStories] = useState([])
  const [singleStory, setSingleStory] = useState({})
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [wrongPath, setWrongPath] = useState(false);

  useEffect(() => {
    setStories(mockData.articles)
    setDisplayedStories(mockData.articles)
    // getNewsData()
    // .then(stories => {
    //   console.log('newsData', stories.articles)
    //   setStories(stories.articles)
    // })
    // .catch(error => {
    //   console.log('error', error)
    //   setError(error)
    // })
  }, [])

  const getStory = (storyObject) => {
    setSingleStory(storyObject)
  }

  const clearSetStory = () => {
    setSingleStory({})
  }

  const changeDisplayedStories = (input) => {
    const toDisplay = stories.filter((story) => {
    const title = story.title.toLowerCase()
    return title.includes(input)
  })
    setDisplayedStories(toDisplay)
  }

  return (
    <>
      <Header 
      singleStory={singleStory}
      clearSetStory={clearSetStory}
      changeDisplayedStories={changeDisplayedStories}
      />
      {/* {Object.keys(singleStory).length === 0 ? ( <SearchBar displayedStories={displayedStories} changeDisplayedStories={changeDisplayedStories}/> ) : (null) } */}
      <div className="App">
        <Switch>
          <Route exact path='/:url' render={({match})=>  {
            const url = match.url
            return (
            <StoryPage 
              path={url}
              stories={stories} 
              singleStory={singleStory} 
            /> )} }/>
          <Route exact path ='/' render={()=> ( <StoryBrowser displayedStories={displayedStories} getStory={getStory}/> )}/>
        </Switch>
      </div>
    </>
  );
}

export default App;
