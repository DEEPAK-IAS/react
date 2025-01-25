import React from 'react';
import { Link } from 'react-router-dom';

const nav = ({search, setSearch}) => {
  return (
    <nav className='Nav'>
      <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <input 
          type="text" 
          id='search'
          placeholder='Search Posts'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ul>
        <li><Link to="/" className='link'>Home</Link></li>
        <li><Link to="/post" className='link'>Post</Link></li>
        <li><Link to="/about" className='link'>About</Link></li>
      </ul>
    </nav>
  )
}

export default nav