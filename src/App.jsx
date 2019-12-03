import React, { useState, useEffect } from 'react'
import Game from './components/Game'

const App = props => {
  const [playerBoard, setPlayerBoard] = useState()
  const [computerBoard, setComputerBoard] = useState()
  const [score, setScore] = useState()

  const calculateWinner = () => {
    // const playerMove = playerBoard
    // const computerMove = computerBoard
    if (playerBoard == null && computerBoard === '?') {
      return null
    } else {
      if (playerBoard === computerBoard) {
        // status.score[2]++
        return 'Draw'
      } else {
        if (
          (playerBoard === 'Rock' && computerBoard === 'Scissors') ||
          (playerBoard === 'Paper' && computerBoard === 'Rock') ||
          (playerBoard === 'Scissors' && computerBoard === 'Paper')
        ) {
          // status.score[0]++
          return 'Player wins'
        } else {
          // status.score[1]++
          return 'Computer wins'
        }
      }
    }
  }

  const generateMove = () => {
    const objects = ['Rock', 'Paper', 'Scissors']
    if (playerBoard == null) {
      return null
    } else {
      let random = Math.floor(Math.random() * 3)
      setComputerBoard(objects[random])
    }
  }

  const displayClicked = (rps, move) => {
    // setDisplay(rps)
    setPlayerBoard(rps)
    generateMove()
    calculateWinner()
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
        <p>{computerBoard}</p>
        <button className="small">?</button>
      </div>
      <div className="player-row">
        <div className="col">Player's move</div>
        <p>{playerBoard}</p>
        <div className="row">
          <button className="small" onClick={() => displayClicked('Rock')}>
            Rock
          </button>
          <button className="small" onClick={() => displayClicked('Paper')}>
            Paper
          </button>
          <button className="small" onClick={() => displayClicked('Scissors')}>
            Scissors
          </button>
        </div>
      </div>
      <p>{calculateWinner}</p>
    </div>
  )
}

export default App
