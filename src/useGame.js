import {useState, useEffect, useRef} from 'react'


function UseGame (sec=5) {
    const [text, setText] = useState("")
    const [time, setTime] = useState(sec)
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
      setTime(sec)
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

      return {textBoxRef, handleChange, text, isDisabled, startGame, time, countWords}
  
}


export default UseGame