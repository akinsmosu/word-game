import React from 'react';

function Input({ handleSumbitGuess }) {
          
    const [guess, setGuess] = React.useState('');
    

    function handleSubmit(event){
        event.preventDefault();
        handleSumbitGuess(guess)
        setGuess('')
    }

    return (
        <form 
            className='guess-input-wrapper'
            onSubmit={event => {
                handleSubmit(event)
            }}
        >
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                required
                minLength={5}
                maxLength={5}
                pattern='[a-zA-z]{5}'
                id="guess-input"
                type="text"
                value={guess}
                onChange={(event) => {
                    setGuess(event.target.value.toUpperCase())
                }}
            >

            </input>
        </form>
      )
}

export default Input;
