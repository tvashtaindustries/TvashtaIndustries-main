import { useState } from 'react'
import './App.css'
import './App.css'
import Header from './components/Header'
import Services from './components/Services'
import OurProjects from './components/OurProjects'
import Products from './components/Products'


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="main-container">
    <Header/>
    <Services/>
    <OurProjects/>
    <Products/>
      
    </div>
  )
}

export default App
