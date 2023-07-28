import { useState } from 'react'
import './SearchBar.css'

export const SearchBar = ({changeDisplayedStories}) => {
  const [inputValue, setInputValue] = useState('')

  const updateInputValue = (e) => {
    setInputValue(e.target.value)
    changeDisplayedStories(inputValue.toLowerCase())
  }

  return (
    <div className='search-bar-container'>
    <label htmlFor='searchInput' className='search-text'>Looking for something specific?</label>
    <input 
      id='searchInupt' 
      className='search-input' 
      name='search' 
      autoComplete='off' 
      value={inputValue} 
      onChange={updateInputValue} 
    />
    </div>
  )
}