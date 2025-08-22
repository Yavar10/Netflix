import React from 'react'
import './Player.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const Player = () => {
  return (
    <div>
      <Navbar />
    <div className='player-page'>
      <div className="video-container">
        <iframe
          className="video-frame"
          src="https://www.youtube.com/embed/GZfuWMDEJpw?si=E6t"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
      <Footer />
    </div>
  )
}

export default Player
