import { NavLink } from 'react-router-dom'
import { SearchBar } from '../SearchBar/SearchBar'

import './Header.css'

export const Header = ({singleStory, clearSetStory, changeDisplayedStories}) => {

  const handleClick = () => {
    clearSetStory()
  }

  return (
    <div className='header'>
      <NavLink to={'/'} onClick={() => handleClick()} style={{ color: 'inherit', textDecoration: 'inherit' }}>Return Home</NavLink>
      {Object.keys(singleStory).length === 0 ? ( <SearchBar  changeDisplayedStories={changeDisplayedStories}/> ) : (null) }
    </div>
  )
}