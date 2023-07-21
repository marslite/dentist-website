import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
          <nav>
            <a href="/">Go to Home Page</a>
            <a href="/procedures">See Our Procedures</a>
            <a href="/contact">Contact Us!</a>
          </nav>
          <div>
            <Home />
          </div>
       </div>
  )
}

export default App
