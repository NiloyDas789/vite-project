import React, { useEffect, useState } from 'react'

function Joke() {
    const [joke, setJoke] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState(false)
    useEffect(() => {
        fetch('https://official-joke-api.appspot.com/jokes/randomu')
        .then(response => response.json())
        .then(results =>{ 
          setJoke(results) 
          console.log(joke);
          setIsLoading(false)
          console.log(results);
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