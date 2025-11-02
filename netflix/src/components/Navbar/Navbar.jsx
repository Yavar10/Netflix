import React from 'react'
import './Navbar.css'
import logo from '../../assets/assets/logo.png'
import searchIcon from '../../assets/assets/search_icon.svg'
import { motion } from 'framer-motion'
import bellIcon from '../../assets/assets/bell_icon.svg'
import pfImg from '../../assets/assets/profile_img.png'
import { useNavigate } from 'react-router-dom'
import caretIcon from '../../assets/assets/caret_icon.svg'
const Navbar = () => {
  const navigate = useNavigate();
  const navlinks=(e)=>{
      navigate(`/${e}`);
  }
  return (
    
    <div className='nav'>
    <div className='navl'>
        <motion.img  onClick={()=>{navlinks("Home")}} whileHover={{scale:1.1}} whileTap={{ro}} src={logo} alt="" />
    
    <ul>
        <li onClick={()=>{navlinks("Home")}}>Home</li>
        <li onClick={()=>{navlinks("player")}}>TV Shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>My List</li>
        <li>Browse by Language</li>
    </ul>
    </div>
    <div className='navr'>
        <img src={searchIcon} className='icon' alt="" />
        <p>Children</p>
        <img src={bellIcon} className='icon' alt="" />
        <div className="nav_pf">
            <img src={pfImg} className='pfp' alt="" />
            <img src={caretIcon}  alt="" />
    <div className='drop'>
      <p>
      Sign out of NetFliix
      </p>
    </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar