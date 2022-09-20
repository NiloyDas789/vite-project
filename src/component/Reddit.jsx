import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'

function Reddit() {
    const {data: posts, isLoading, errorMessage} = useFetch('https://www.reddit.com/r/Home.json')
    
  return (
      <div>
        <h2>
        Reddit api
        </h2>
        {isLoading && <div>Loading...</div> }
        {posts && (
          <ul>
            {posts.data.children.map(post=>(
            <li key={post.data.id}> 
              <a href={`https://www.reddit.com/${post.data.permalink}`}>{post.data.title}</a>
              <div><img className='rounded' src={post.data.thumbnail ?? ''} /></div>
              
            </li>
          ))}
          
          </ul>
        )}
        {errorMessage && <div>{errorMessage}</div> }
      </div>
  )
}

export default Reddit