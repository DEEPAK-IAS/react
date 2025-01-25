import React, {useContext} from 'react'
import DataContext from './context/DataContext'

const NewPost = () => {
  const {handleSubmit, postTitle, setPostTitle, postBody, setPostBody} = useContext(DataContext);
  return(<main>
      <h2>New Post</h2>
      <form className="newPostForm" onSubmit={handleSubmit}>
        <input 
          type="text" 
          id='postTitle'
          required
          value = {postTitle}
          placeholder='Post Title'
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <textarea 
          type="text" 
          id='postBody'
          required
          value = {postBody}
          placeholder='Post Body'
          onChange={(e) => setPostBody(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </main>
  )
}

export default NewPost