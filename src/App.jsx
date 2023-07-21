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
      <div>
          <nav>

            <Link to="/">Go to Homepage</Link>
            <Link to='/procedures'>See Our Procedures</Link>
            <Link to='/contact'> Contact Us!</Link>
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
