import React, { useState, useEffect } from 'react'
import words from '../data/words.json'
import SelectedWordDisplay from '../components/SelectedWordDisplay.jsx'
import LetterButton from '../components/LetterButton.jsx'

const HomePage = () => {
  const [selectedWord, setSelectedWord] = useState('')
  words[Math.floor(Math.random() * words.length)]
  const [gameStatus, setGameStatus] = useState('playing')
  
  const calculateWinner = state => {
    const playerMove = state.board[0]
    const computerMove = state.board[1]
    if (playerMove == null && computerMove === '?') {
      return null
    } else {
      if (playerMove === computerMove) {
        state.score[2]++
        return 'Draw'
      } else {
        if (
          (playerMove === 'Rock' && computerMove === 'Scissors') ||
          (playerMove === 'Paper' && computerMove === 'Rock') ||
          (playerMove === 'Scissors' && computerMove === 'Paper')
        ) {
          state.score[0]++
          return 'Player wins'
        } else {
          state.score[1]++
          return 'Computer wins'
        }
      }
    }
  }
 
  
  
  useEffect(() => {
    if (strikes === 0) {
      setGameStatus('lost')
    }
  }, [state.score[1]]

  useEffect(() => {
  }, [])

  return (
    <main>
      <KeyboardEventHandler
        handleKeys={words}
        onKeyEvent={(key, e) => {
          letterClicked(key)
        }}
      />
      <Snowman bananas={strikes} />
      <section>
        <SelectedWordDisplay
          selectedWord={selectedWord}
          gameStatus={gameStatus}
          lettersGuessed={lettersGuessed}
        />
        {gameStatus === 'lost' && (
          <section>The word was {selectedWord}</section>
        )}
      </section>
      <section>
        <header>guessed letters: </header>
        <ul>
          {lettersGuessed.map(letter => {
            return <li key={letter}>{letter}</li>
          })}
        </ul>
      </section>
      <section>
        <ul className="letter-buttons">
          {letters.map(letter => {
            return (
              <li key={letter}>
                <LetterButton
                  handleButtonClick={letterClicked}
                  letter={letter}
                  gameStatus={gameStatus}
                  lettersGuessed={lettersGuessed}
                />
              </li>
            )
          })}
        </ul>
      </section>
    </main>
  )
}

export default HomePage
