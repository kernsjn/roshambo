import React, { useState, useEffect } from 'react'
import Game from './components/Game'

const App = props => {
  const [board, setBoard] = useState()
  const [display, setDisplay] = useState('')

  const calculateWinner = status => {
    const playerMove = status.board[0]
    const computerMove = status.board[1]
    if (playerMove == null && computerMove === '?') {
      return null
    } else {
      if (playerMove === computerMove) {
        status.score[2]++
        return 'Draw'
      } else {
        if (
          (playerMove === 'Rock' && computerMove === 'Scissors') ||
          (playerMove === 'Paper' && computerMove === 'Rock') ||
          (playerMove === 'Scissors' && computerMove === 'Paper')
        ) {
          status.score[0]++
          return 'Player wins'
        } else {
          status.score[1]++
          return 'Computer wins'
        }
      }
    }
  }

  const generateMove = board => {
    const objects = ['Rock', 'Paper', 'Scissors']
    if (board[0] == null) {
      return null
    } else {
      let random = Math.floor(Math.random() * 3)
      board[1] = objects[random]
      return board
    }
  }

  const displayClicked = rps => {
    setDisplay(rps)
    setBoard()
  }

  const handleClick = move => {
    // setBoard = { board }.slice()
    // board[0] = move
    // const ButtonPressed = op => {
    //   setDisplay('')
    // }
    console.log(displayClicked)
  }

  return (
    <div className="grid">
      <div className="header">
        <div className="col">Roshambo</div>
        <span>
          <small>Rock, paper, scissors</small>
        </span>
      </div>
      <div className="computer-row">
        <div className="col">Computer's move</div>
        <button bsSize="small">?</button>
      </div>
      <div className="player-row">
        <div className="col">Player's move</div>
        <p>{display}</p>
        <div className="row">
          <button bsSize="small" onClick={() => displayClicked('Rock')}>
            Rock
          </button>
          <button bsSize="small" onClick={() => displayClicked('Paper')}>
            Paper
          </button>
          <button bsSize="small" onClick={() => displayClicked('Scissors')}>
            Scissors
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
