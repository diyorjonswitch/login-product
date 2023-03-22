import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Components/About'
import Error from './Components/Error'
import Products from './Components/Products'
import SharedLayout from './Components/SharedLayout'
import Home from './Components/Home'
import Single from './Components/Single'
import Modal from './Components/Modal'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SharedLayout />}>

          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='products/:productId' element={<Single />} />
          <Route path='*' element={<Error />} />

        </Route>
      </Routes>
    </div>
  )
}

export default App
