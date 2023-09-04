import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';

// styles
import './Searchbar.css';

export default function Searchbar() {
  const [term, setTerm] = useState('')
  const searchInput = useRef(null)
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search?q=${term}`)
    setTerm('')
    searchInput.current.focus();
  }

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}> 
        <label htmlFor="search">Search:</label>
        <input
          id="search" 
          type="text" 
          onChange={(e) => setTerm(e.target.value)}
          ref={searchInput}
          value={term}
          required/>
      </form>
    </div>
  )
}