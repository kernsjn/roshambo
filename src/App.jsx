import React, { useState, useEffect } from 'react'

const App = props => {
  const [playerBoard, setPlayerBoard] = useState()
  const [computerBoard, setComputerBoard] = useState()
  const [score, setScore] = useState()

  const calculateWinner = () => {
    console.log({ computerBoard }, 'calculate winner')
    console.log({ playerBoard })
    if (playerBoard == null && computerBoard === '?') {
      return null
    } else {
      if (playerBoard === computerBoard) {
        setScore('Draw')
      } else {
        if (
          (playerBoard === 'Rock' && computerBoard === 'Scissors') ||
          (playerBoard === 'Paper' && computerBoard === 'Rock') ||
          (playerBoard === 'Scissors' && computerBoard === 'Paper')
        ) {
          setScore('Player wins')
        } else {
          setScore('Computer wins')
        }
      }
    }
  }
  const generateMove = () => {
    const objects = ['Rock', 'Paper', 'Scissors']
    let random = Math.floor(Math.random() * 3)
    setComputerBoard(objects[random])
  }

  const displayClicked = rps => {
    setPlayerBoard(rps)
    generateMove()
  }

  useEffect(() => {
    console.log({ computerBoard })
    console.log({ playerBoard })
    if (
      typeof playerBoard != 'undefined' &&
      typeof computerBoard != 'undefined'
    ) {
      calculateWinner()
    }
  }, [computerBoard])

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
      <div className="score-row">
        <p className="score">{score}</p>
      </div>
    </div>
  )
}

export default App
