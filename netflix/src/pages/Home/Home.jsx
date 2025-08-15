import React from 'react'
import './Home.css'

import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../../public/hero_banner.jpg'
import Titlecards from '../../components/Titlecards/Titlecards'
import Footer from '../../components/Footer/Footer'

import HeroT from '../../assets/assets/hero_title.png'
import playbtn from '../../assets/assets/play_icon.png'
import infobtn from '../../assets/assets/info_icon.png'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className='hero'>
        <img className='banner' src={Hero} alt="" />
        <div className="caption">
          <img className='title' src={HeroT} alt="" />
          <p>Discovering his ties to a secret ancient order, a young man living 
            in modern Istanbul
            embarks on a quest to save the city from immortal enemy.</p>
            <div className="hero_btn">
              <button className='btn'><img src={playbtn} alt="" />Play</button>
              <button className='btn dark-btn'><img src={infobtn} alt="" />Info</button>
        </div>
            <Titlecards/>
            </div>
        </div>
       <div className="more-cards">
            <Titlecards title={"Blockbuster Movies"}/>
            <Titlecards title={"Only on NetFlix"}/>
            <Titlecards title={"Upcoming "}/>
            <Titlecards title={"Top picks for You"}/>
            </div>
            <Footer/>
    </div>
  )
}

export default Home