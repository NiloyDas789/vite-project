import React, { useEffect, useState } from 'react'

let  useFetch = url => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState(false)
    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(results =>{ 
            setData(results) 
          setIsLoading(false)
          console.log(results);
        })
        .catch(()=>{
            setIsLoading(false)
            setErrorMessage('There was an error!')
        })
    }, [url])

  return {data,isLoading,errorMessage}
}
export default useFetch
