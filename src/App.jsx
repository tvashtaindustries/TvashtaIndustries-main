import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './App.css'
import Header from './components/Header'
import Services from './components/Services'


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
    <Header/>
    <Services/>
      
    </>
  )
}

export default App
