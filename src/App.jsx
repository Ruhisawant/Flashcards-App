import { useState } from 'react'
import './App.css'

const App = () => {
  isFlipped = false

  const salonData = [
    {
      img: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Salons by JC',
      subtitle: 'Providing high-quality beauty services in a modern, luxurious environment.',
      link: 'https://salonsbyjc.com/salon-services/'
    },
  ]
  
  const flipCard = () => {
    isFlipped = !isFlipped
  }

  return (
    <div className='App'>
      <div className='title'>Logos</div>

      <div className='cards-container'>
        {salonData.map((salon, index) => (
          <div className='card' key={index}>
            <img className='card-img' src={salon.img} alt={`Image of ${salon.title}`} />
            <div className='card-title'>{salon.title}</div>
            <div className='card-subtitle'>{salon.subtitle}</div>
            <a className='card-button' href={salon.link} target='_blank' rel='noopener noreferrer'>
              View Services
            </a>
          </div>
        ))}
      </div>

      <button>next</button>
    </div>
  )
}

export default App