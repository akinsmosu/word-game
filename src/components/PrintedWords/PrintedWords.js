import React from 'react';
import Guess from '../Guess'
import { range } from '../../utils'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

function PrintedWords({ guessList, answer }) {
  return (
    <div className='guess-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={num} value={guessList[num]} answer={answer} />
      ))}
    </div>
  )
}

export default PrintedWords;
