import React, {useState, useEffect, useRef} from "react"
import './App.css'
import { configure } from "@testing-library/react"

function App() {
    const [text, setText] = useState("")
    const [time, setTime] = useState(3)
    const [isStart, setIsStart] = useState(false)
    const [countWords, setCountWords] = useState(0)
    const [isDisabled, setIsDisabled] = useState(false)
    const textBoxRef = useRef()
    
    function handleChange(e) {
        const {value} = e.target
        setText(value)
    }
    
    function calculateWordCount(text) {
      const wordsArr = text.trim().split(" ")
      return wordsArr.filter(word => word !== "").length
    }
    
    function startGame () {
      setIsStart(true)
      setTime(3)
      setText('')
      setIsDisabled(true)
      textBoxRef.current.disabled = false
      textBoxRef.current.focus()
    }

    function endGame() {
      setIsStart(false)
      setCountWords(calculateWordCount(text))
      setIsDisabled(false)
    }

    useEffect (()=> {
      if (isStart==true && time!==0) {
        setTimeout(() => {
          setTime(time=>time-1)
        }, 1000)
      } else {
        endGame()
      }
    }, [time, isStart])
    

  
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
