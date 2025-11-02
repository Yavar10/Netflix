import React, { useRef } from 'react'
import './Home.css'

import Navbar from '../../components/Navbar/Navbar'
import Titlecards from '../../components/Titlecards/Titlecards'
import Footer from '../../components/Footer/Footer'
import { motion } from 'framer-motion'
import { useInView } from "framer-motion"
import HeroT from '../../assets/assets/hero_title.png'
import playbtn from '../../assets/assets/play_icon.png'
import infobtn from '../../assets/assets/info_icon.png'

const Home = () => {
  // individual refs for each Titlecards row
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)

  // independent inView states
  const inView1 = useInView(ref1, { once: true, margin: "-100px" })
  const inView2 = useInView(ref2, { once: true, margin: "-100px" })
  const inView3 = useInView(ref3, { once: true, margin: "-100px" })
  const inView4 = useInView(ref4, { once: true, margin: "-100px" })

  return (
    <div>
      <Navbar />
      <div className='hero'>
        <img className='banner' src='hero_banner.jpg' alt="" />
        <div className="caption">
          <img className='title' src={HeroT} alt="" />
          <p>
            Discovering his ties to a secret ancient order, a young man living 
            in modern Istanbul embarks on a quest to save the city from immortal enemy.
          </p>
          <div className="hero_btn">
            <motion.button whileTap={{ y: -1, scale: 0.99 }} className='btn'>
              <img src={playbtn} alt="" />Play
            </motion.button>
            <motion.button whileTap={{ y: -1, scale: 0.99 }} className='btn dark-btn'>
              <img src={infobtn} alt="" />Info
            </motion.button>
          </div>
          <Titlecards />
        </div>
      </div>

      <div className="more-cards">
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, y: 100 }}
          animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Titlecards title={"Blockbuster Movies"} />
        </motion.div>

        <motion.div
          ref={ref2}
          initial={{ opacity: 0, y: 100 }}
          animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Titlecards title={"Only on NetFlix"} />
        </motion.div>

        <motion.div
          ref={ref3}
          initial={{ opacity: 0, y: 100 }}
          animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Titlecards title={"Upcoming"} />
        </motion.div>

        <motion.div
          ref={ref4}
          initial={{ opacity: 0, y: 100 }}
          animate={inView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Titlecards title={"Top picks for You"} />
        </motion.div>
      </div>

      <Footer />
    </div>
  )
}

export default Home
