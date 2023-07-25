import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import { StoryBrowser } from './StoryBrowser/StoryBrowser';
import { StoryPage } from './StoryPage/StoryPage';

function App() {
  return (
    <div className="App">
      <Route exact path='/:url' render={()=> ( <StoryPage /> )}/>
      <Route exact path ='/' render={()=> ( <StoryBrowser /> )}/>
    </div>
  );
}

export default App;
