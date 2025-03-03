import { useState } from 'react'
import './App.css'

const App = () => {
  const [currentCard, setCurrentCard] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)

  const cards = [
    {
      front: 'I am always hungry and will die if not fed, but whatever I touch will soon turn red. What am I?',
      back: 'Fire',
    },
    {
      front: 'With pointed fangs I sit and wait; with piercing force I crunch out fate; grabbing victims, proclaiming might; physically joining with a single bite. What am I?',
      back: 'A stapler',
    },
    {
      front: 'A girl has as many brothers as sisters, but each brother has only half as many brothers as sisters. How many brothers and sisters are there in the family?',
      back: 'Four sisters and three brothers',
    },
    {
      front: 'What can run but never walks, has a mouth but never talks, has a head but never weeps, has a bed but never sleeps?',
      back: 'A river',
    },
    {
      front: 'What can fill a room but takes up no space?',
      back: 'Light',
    },
    {
      front: 'Two in a corner, one in a room, zero in a house, but one in a shelter. What is it?',
      back: 'The letter R',
    },
    {
      front: 'I turn once, what is out will not get in. I turn again, what is in will not get out. What am I?',
      back: 'A key',
    },
    {
      front: 'What breaks yet never falls, and what falls yet never breaks?',
      back: 'Day breaks and night falls',
    },
    {
      front: 'What goes through cities and fields, but never moves?',
      back: 'A road',
    },
    {
      front: 'Mary has four daughters, and each of her daughters has a brother. How many children does Mary have?',
      back: 'Five - each daughter has the same brother.',
    },
  ]
  
  const flipCard = () => {
    setIsFlipped(!isFlipped)
    if (isFlipped) {
      text = cards[currentCard].back
    } else {
      text = cards[currentCard].front
    }
  }

  const nextCard = () => {
    setCurrentCard(currentCard + 1)
    setIsFlipped(!isFlipped)
  }

  return (
    <div className='App'>
      <div className='title'>Guess the Logo</div>

      <div className='cards-container'>
        <div className='card' onClick={flipCard}>
        {isFlipped ? (
          <div className='card-txt'>{cards[currentCard].back}</div>
        ) : (
          <div className='card-txt'>{cards[currentCard].front}</div>
        )}
        </div>
      </div>

      <button onClick={nextCard}>Next</button>
    </div>
  )
}

export default App