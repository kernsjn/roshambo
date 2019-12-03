import React from 'react'

const WordButton = props => {
  return (
    <button
      onClick={() => props.handleButtonClick(props.word)}
      disabled={
        props.wordsGuessed.includes(props.word) || props.gameStatus === 'lost'
      }
    >
      {props.letter.toUpperCase()}
    </button>
  )
}

export default WordButton
