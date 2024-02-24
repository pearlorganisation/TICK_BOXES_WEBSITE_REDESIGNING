import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Header from './components/common/Header/Header'
import ContactUs from './components/ContactUs/ContactUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contactUs' element={<ContactUs />} />

      </Routes>
    </div>
  )
}

export default App
