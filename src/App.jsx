import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Reddit from './component/Reddit';
import Joke from './component/Joke';

function App() {
  const [redit, setRedit] = useState(false);
  const [joke, setJoke] = useState(false);

  return (
    <div className="App">
      <button className="button" onClick={()=>setRedit(prevRedit=> !prevRedit )} >Toggle Redit</button>
      <button className="button" onClick={()=>setJoke(prevJoke=> !prevJoke )} >Toggle Joke</button>

      {redit && (
      <div><Reddit /></div>
      )}

      {joke && (
      <Joke />
      )}
     
    </div>
  )
}

export default App
