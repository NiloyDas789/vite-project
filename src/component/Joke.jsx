import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'

function Joke() {
    const  {data: joke, isLoading, errorMessage}= useFetch('https://official-joke-api.appspot.com/jokes/random')

  return (
    <div>
        <h2>
        Reddit api
        </h2>
        {isLoading && <div>Loading...</div> }
        {joke && (
          <ul>
            <li key={joke.id}> 
            <div>{joke.setup}</div>
            <div>{joke.punchline}</div>
              
            </li>
          
          </ul>
        )}
        {errorMessage && <div>{errorMessage}</div> }
      </div>
  )
}

export default Joke