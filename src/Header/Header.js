import { NavLink } from 'react-router-dom'
import { SearchBar } from '../SearchBar/SearchBar'

import './Header.css'

export const Header = ({singleStory, clearSetStory, changeDisplayedStories}) => {

  const handleClick = () => {
    clearSetStory()
  }

  return (
    <div className='header'>
      <NavLink className='return-home' to={'/'} onClick={() => handleClick()} >Return Home</NavLink>
      {!singleStory ? ( <SearchBar  changeDisplayedStories={changeDisplayedStories}/> ) : (null) }
    </div>
  )
}