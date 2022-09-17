import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Items from './components/Items/Items'
import Navbar from './components/Navbar/Navbar'
import Plant from './components/Plant/Plant'
import './index.css'

const App = () => {
  return (<>
  <Navbar />
  <Header />
  <Plant />
  <Items />
  <Footer />
  </>
  )
}

export default App