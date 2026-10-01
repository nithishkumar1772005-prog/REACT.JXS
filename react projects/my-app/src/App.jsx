import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './header'
import Services from './services'
import Footer from './footer'
import Child from './Child'
import Parent from './Parent'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>hello all</h1>
    <Header />
    <Services />
    <Footer />
    <Parent />
    </>
  )
}

export default App
