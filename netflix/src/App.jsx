import './App.css'
import { ToastContainer } from 'react-toastify'

import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'

import { Routes,Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/'element={<Login/>} />
        <Route path='/Home'element={<Home/>} />
        <Route path='/player'element={<Player/>} />
      </Routes>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  )
}

export default App
