import React from 'react';

function Banner({ className, winner, numGuesses, answer }) {

  return (
    <div className={className}>
      <p>
        {winner 
          ? (
              <p>
                <strong>Congratulations!</strong> Got it in{' '}
                <strong>{numGuesses} guesses.</strong>
              </p>
          )
          : (
              <p>
                Sorry, the correct anwswer is <strong>{answer}</strong>
              </p>
          )
        }
      </p>
    </div>
  )
}

export default Banner;
