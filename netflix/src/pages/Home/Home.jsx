import React from 'react'
import './Home.css'

import Navbar from '../../components/Navbar/Navbar'
//import Hero from '../../../public/hero_banner.jpg'
import Titlecards from '../../components/Titlecards/Titlecards'
import Footer from '../../components/Footer/Footer'
import { motion } from 'framer-motion'

import HeroT from '../../assets/assets/hero_title.png'
import playbtn from '../../assets/assets/play_icon.png'
import infobtn from '../../assets/assets/info_icon.png'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className='hero'>
        <img className='banner' src='hero_banner.jpg' alt="" />
        <div className="caption">
          <img className='title' src={HeroT} alt="" />
          <p>Discovering his ties to a secret ancient order, a young man living 
            in modern Istanbul
            embarks on a quest to save the city from immortal enemy.</p>
            <div className="hero_btn">
              <motion.button whileTap={{y:-1,scale:0.99}} className='btn'><img src={playbtn} alt="" />Play</motion.button>
              <motion.button whileTap={{y:-1,scale:0.99}} className='btn dark-btn'><img src={infobtn} alt="" />Info</motion.button>
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