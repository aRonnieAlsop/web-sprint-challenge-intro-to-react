import React, { useState, useEffect } from 'react';
import axios from 'axios';

const URL = 'https://swapi.dev/api/people/'


const App = () => {
  const [chars, setChars] = useState([])

  useEffect(() => {
    function fetchCharacter() {
      axios.get(URL)
        .then(res => {
          const character = res.data
          console.log(character)
          setChars(character)
          console.log(chars)
        })
        .catch(err => {
          console.log(err.message)
        })
    }
    fetchCharacter()
  }, [])

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
 

  if (!chars) return `The force isn't strong with this one...`
  return (
    <div className="App">
      <h1 className="Header">Star Wars</h1>
      <h2>Main Characters</h2>
      <section>
      {
        chars.map(ch => <div key={ch.id}> {ch.name}  <div>Born:  {ch.birth_year}</div></div>)
      }
      </section>
     </div> 
  );
}

export default App;
