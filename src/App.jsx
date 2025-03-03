import { useState } from 'react'
import './App.css'

const App = () => {
  const cards = [
    {
      front: 'I am always hungry and will die if not fed, but whatever I touch will soon turn red. What am I?',
      back: 'Fire',
      color: 'ff6961',
    },
    {
      front: 'With pointed fangs I sit and wait; with piercing force I crunch out fate; grabbing victims, proclaiming might; physically joining with a single bite. What am I?',
      back: 'A stapler',
      color: 'ff6961',
    },
    {
      front: 'A girl has as many brothers as sisters, but each brother has only half as many brothers as sisters. How many brothers and sisters are there in the family?',
      back: 'Four sisters and three brothers',
      color: 'f8d66d',
    },
    {
      front: 'What can run but never walks, has a mouth but never talks, has a head but never weeps, has a bed but never sleeps?',
      back: 'A river',
      color: 'ff6961',
    },
    {
      front: 'What can fill a room but takes up no space?',
      back: 'Light',
      color: 'ff6961',
    },
    {
      front: 'Two in a corner, one in a room, zero in a house, but one in a shelter. What is it?',
      back: 'The letter R',
      color: '8cd47e',
    },
    {
      front: 'The day before yesterday I was 21, and next year I will be 24. When is my birthday?',
      back: 'December 31st - today is January 1st',
      color: 'f8d66d',
    },
    {
      front: 'What breaks yet never falls, and what falls yet never breaks?',
      back: 'Day breaks and night falls',
      color: '8cd47e',
    },
    {
      front: 'What goes through cities and fields, but never moves?',
      back: 'A road',
      color: '8cd47e',
    },
    {
      front: 'Mary has four daughters, and each of her daughters has a brother. How many children does Mary have?',
      back: 'Five - each daughter has the same brother.',
      color: 'f8d66d',
    },
  ]

  const initialShuffledCards = [...cards].sort(() => Math.random() - 0.5)
  const [shuffledCards] = useState(initialShuffledCards)
  const [currentCard, setCurrentCard] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)

  const flipCard = () => {
    setIsFlipped(!isFlipped)
  }

  const nextCard = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * shuffledCards.length);
    } while (randomIndex === currentCard);
    setCurrentCard(randomIndex);
    setIsFlipped(false);
  }

  return (
    <div className='App'>
      <div className='title'>Riddle Quest</div>
      <div className='subtitle'>Test Your Wits with Fun and Tricky Riddles!</div>
      <h3>Number of Cards: 10</h3>

      <div className='cards-container'>
        <div className='card' onClick={flipCard} style={{ backgroundColor: `#${shuffledCards[currentCard].color}` }}>
          <div className='card-text'>
            {isFlipped ? shuffledCards[currentCard].back : shuffledCards[currentCard].front}
          </div>
        </div>
      </div>

      <button onClick={nextCard}>Next</button>
    </div>
  )
}

export default App