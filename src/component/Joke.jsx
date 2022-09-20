import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import useFetch from '../hooks/useFetch'

function Joke() {
    // const  {data: joke, isLoading, errorMessage}= useFetch('https://official-joke-api.appspot.com/jokes/random')
    let fetchJokes=()=>{
        return fetch('https://official-joke-api.appspot.com/jokes/random')
        .then(response => response.json())
      }
      const {data: joke, isLoading, isError,error,isSuccess}
       = useQuery('joke',
      fetchJokes,
      {
        // staleTime: 6000,
        // refetchOnWindowFocus: false,
        retry: false,
    });

  return (
    <div>
        <h2>
        Reddit api
        </h2>
        {isLoading && <div>Loading...</div> }
        {isSuccess && (
          <ul>
            <li key={joke.id}> 
            <div>{joke.setup}</div>
            <div>{joke.punchline}</div>
              
            </li>
          
          </ul>
        )}
        {isError && <div>{error.message}</div> }
      </div>
  )
}

export default Joke