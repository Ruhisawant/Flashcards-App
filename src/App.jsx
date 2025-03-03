import { useState } from 'react'
import './App.css'

const App = () => {

  const cards = [
    {
      front: 'Salons by JC',
      back: 'back',
    },
  ]
  

  const [currentCard, setCurrentCard] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  
  const flipCard = () => {
    setIsFlipped(!isFlipped)
    if (isFlipped) {
      text = cards[currentCard].back
    }
    else {
      text = cards[currentCard].front
    }
  }

  const nextCard = () => {
    setCurrentCard(currentCard + 1)
  }

  return (
    <div className='App'>
      <div className='title'>Logos</div>

      <div className='cards-container'>
        <div className='card' onClick={flipCard}>
        {isFlipped ? (
          <div className='card-front-txt'>{cards[currentCard].back}</div>
        ) : (
          <div className='card-front-txt'>{cards[currentCard].front}</div>
        )}
        </div>
      </div>

      <button onClick={nextCard}>next</button>
    </div>
  )
}

export default App