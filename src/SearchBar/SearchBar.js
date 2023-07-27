import { useState } from 'react'
import './SearchBar.css'

export const SearchBar = ({stories, changeDisplayedStories}) => {
  const [selectedStories, setSelectedStories] = useState([])
  const [inputValue, setInputValue] = useState('')

  const updateInputValue = (e) => {
    setInputValue(e.target.value)
    changeDisplayedStories(inputValue.toLowerCase())
  }

  return (
    <div className='search-bar-container'>
    <p className='search-text'>Looking for something specific?</p>
    <input className='search-input' name='search' value={inputValue} onChange={updateInputValue} />
    </div>
  )
}