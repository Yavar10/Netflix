import React, { useEffect, useRef } from 'react'
import './Titlecards.css'
import cards_data from '../../assets/assets/cards/Cards_data.js'

const Titlecards = ({title,category}) => {
  const cardsRef=useRef();
  
  
  const handleWheel=(e)=>{
    e.preventDefault();
    cardsRef.current.scrollLeft+=e.deltaY;
  }
  
  
  useEffect(()=>{
    cardsRef.current.addEventListener('wheel',handleWheel)
  },[]
)
return (
    <div className='titlecards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {cards_data.map((card,index)=>{
          return <div className="card" key ={index}>
            <img src={card.image} alt="" />
            <p>{card.name}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default Titlecards