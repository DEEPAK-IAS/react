import React from 'react'

const NewPost = ({handleSubmit, postTitle, setPostTitle, postBody, setPostBody}) => {
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