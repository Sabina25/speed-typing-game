import React from "react"
import './App.css'
import UseGame from './useGame'

function App() {

    const {textBoxRef, 
            handleChange, 
            text, 
            isDisabled, 
            startGame, 
            time, 
            countWords} = UseGame()

    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea
              ref={textBoxRef}
              onChange={handleChange}
              value={text}
              disabled={!isDisabled}
            />
            <h4>Time remaining: {time}</h4>
            
            <button onClick={() => {startGame()}} 
                    disabled={isDisabled}>Start</button>
            <h1>Word count: {countWords}</h1>
        </div>
    )
}

export default App
