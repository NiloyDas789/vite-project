import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import useFetch from '../hooks/useFetch'

function Reddit() {
    // const {data: posts, isLoading, errorMessage} = useFetch('https://www.reddit.com/r/Home.json')
    let fetchPosts=()=>{
      return fetch('https://www.reddit.com/r/Home.json')
      .then(response => response.json())
    }
    const {data: posts, isLoading, isError,error,isSuccess} = useQuery('post',fetchPosts);
     
    
  return (
      <div>
        <h2>
        Reddit api
        </h2>
        {isLoading && <div>Loading...</div> }
        {isSuccess && (
          <ul>
            {posts.data.children.map(post=>(
            <li key={post.data.id}> 
              <a href={`https://www.reddit.com/${post.data.permalink}`}>{post.data.title}</a>
              <div><img className='rounded' src={post.data.thumbnail ?? ''} /></div>
              
            </li>
          ))}
          
          </ul>
        )}
        {isError && <div>{error.message}</div> }
      </div>
  )
}

export default Reddit