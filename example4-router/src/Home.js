import React, { useContext } from 'react';
import Feed from './Feed';
import DataContext from './context/DataContext';

const Home = () => {
  const {searchResults, fetchError, isLoading} = useContext(DataContext)
  return (
    <main className='home'>
      {isLoading && <p className="statusMsg">Loading posts</p>}
      {!isLoading && fetchError && <p className='statusMsg'>{fetchError}</p>}

      {!isLoading && !fetchError &&( searchResults.length ? 
        <Feed searchResults={searchResults} />
       : 
        <p style={{ marginTop: '2rem' }}>
          No posts to display
        </p>)
      }
    </main>
  );
};

export default Home;
