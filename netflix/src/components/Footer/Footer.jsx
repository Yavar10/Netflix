import React from 'react'
import './Footer.css'
import facebook from '../../assets/assets/facebook_icon.png'
import insta  from '../../assets/assets/instagram_icon.png'
import twitter from '../../assets/assets/twitter_icon.png'
import yt from '../../assets/assets/youtube_icon.png'
import FooterList from './FooterList'
import SocialIcons from './SocialIcons'
const Footer = () => {
  return (
    <div className='footer'>
    <SocialIcons/>
    <FooterList/>
    <p className='copyright-text'>© 1997-2025 Netflix, Inc.</p>
    </div>
  )
}

export default Footer