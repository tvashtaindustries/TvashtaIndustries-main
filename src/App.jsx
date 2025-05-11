import { useState } from 'react'
import './App.css'
import './App.css'
import Header from './components/Header'
import Services from './components/Services'
import OurProjects from './components/OurProjects'


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
    <Header/>
    <Services/>
    <OurProjects/>
      
    </>
  )
}

export default App
