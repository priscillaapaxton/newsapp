import { NavLink } from 'react-router-dom'

import './Header.css'

export const Header = ({clearSetStory}) => {

  const handleClick = () => {
    clearSetStory()
  }

  return (
    <div className='header'>
      <NavLink to={'/'} onClick={() => handleClick()} style={{ color: 'inherit', textDecoration: 'inherit' }}>Return Home</NavLink>
    </div>
  )
}