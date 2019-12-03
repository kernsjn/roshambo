import React from 'react'

const SelectedWordDisplay = props => {
  return (
    <ul>
      {props.selectedWord.split('').map((word, index) => {
        if (
          props.lettersGuessed.includes(word) ||
          props.gameStatus === 'lost'
        ) {
          return <li key={index}>{word}</li>
        } else {
          return <li key={index}>_</li>
        }
      })}
    </ul>
  )
}

export default SelectedWordDisplay
