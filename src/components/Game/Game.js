import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import Input from '../Input/Input';
import PrintedWords from '../PrintedWords/PrintedWords';
import Banner from '../Banner/Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  
  const [guessList, setGuessList] = React.useState([])
  const [numGuesses, setNumGuesses] = React.useState(0)
  const [winner, setWinner] = React.useState(false)
  const [gameOver, setGameOver] = React.useState(false)

  function handleSubmitGuess(guess){
    const nextNumGuesses = numGuesses + 1
    setNumGuesses(nextNumGuesses)
    setGuessList([...guessList, guess])
    if (guess === answer){
      setWinner(true)
    }
    if (nextNumGuesses >= 6){
      setGameOver(true)
    }
  }

  return (
    <>
      <PrintedWords guessList={guessList} answer={answer} />
      <Input handleSumbitGuess={handleSubmitGuess}/>
      {winner && 
        <Banner 
          className="happy banner" 
          winner={winner} 
          numGuesses={numGuesses}
          answer={answer}
        />
      }
      {gameOver && 
        <Banner 
          className="sad banner" 
          winner={winner} 
          numGuesses={numGuesses}
          answer={answer}
        />
      }
      
    </>
  )
}

export default Game;
