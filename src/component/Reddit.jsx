import React, { useEffect, useState } from 'react'

function Reddit() {
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState(false)
    useEffect(() => {
        fetch('https://www.reddit.com/r/Home.json')
        .then(response => response.json())
        .then(results =>{ 
          setPosts(results.data.children) 
          setIsLoading(false)
          console.log(results.data.children);
        })
        .catch(()=>{
            setIsLoading(false)
            setErrorMessage('There was an error!')
        })
    }, [])
    
  return (
      <div>
        <h2>
        Reddit api
        </h2>
        {isLoading && <div>Loading...</div> }
        {posts && (
          <ul>
            {posts.map(post=>(
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