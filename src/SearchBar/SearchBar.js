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
    <>
    <p>INPUT HERE</p>
    <input className='search-input' name='search' value={inputValue} onChange={updateInputValue} />
    </>
  )
}