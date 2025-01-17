import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const URL = 'https://swapi.dev/api/people/'

const Characters = styled.div`
    background-color: rgba(255, 255, 255, 0.5);

`

const Character = styled.div`
    background-color: rgba(255, 255, 255, 0. 3);
    border-bottom: 1px dotted rgba(0, 0, 0, 0.5);
    font-size: 25px;
    margin: 2px;
    &:hover {
      font-size: 40px;
      text-shadow: -5px 1px brown;
      color:  white;
    }
    `

const Header = styled.header`
    font-size: 60px;
`

const Subtitle = styled.h2`
  font-family: Vazir;
  text-shadow: 0.5px 1px brown;
  color:  #F8F0E3;
  font-size: 35px;
`
const Button = styled.button`
  padding: 0;
  border: none;
  background: none;
`
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
      <Header className="Header">Star Wars</Header>
      <Subtitle>Main Characters</Subtitle>
      <Characters>

      {
        chars.map(ch => <Character key={ch.id}> {ch.name}</Character>)
      }
      </Characters>
     </div> 
  );
}

export default App;
