import { Routes, Route, BrowserRouter } from 'react-router-dom'
import React from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
