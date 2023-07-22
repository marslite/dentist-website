import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, Link, Navigate } from 'react-router-dom'
import Contact from './Contact';
import Procedures from './Procedures'
import Home from './Home';

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='div_space'>
          <nav className='navbar_btn'>

            <Link className='homepage_btn' to="/"><button className='nav_btn'>Go to Homepage</button></Link>
            <Link className='proced_btn' to='/procedures'> <button className='nav_btn'>See Our Procedure</button> </Link>
            <Link className='contact_btn' to='/contact'> <button className='nav_btn'>Contact Us!</button></Link>
          </nav>
          <div>
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/procedures" element={<Procedures/>}></Route>
              <Route path="/contact" element={<Contact/>}></Route>
              <Route path="*" element={<Navigate to="/"/>}></Route>
            </Routes>

          </div>
       </div>
  )
}

export default App
