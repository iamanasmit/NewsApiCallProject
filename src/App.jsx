import React from 'react'
import Navbar from './Components/MyNavbar'
import NewsBoard from './Components/NewsBoard'
import { useState } from 'react'
import Contact from './Components/Contact'
const App = () => {
  const [category, setcategory]= useState("general")
  return (
    <div>
      <Navbar setcategory={setcategory}/>
      <NewsBoard category={category}/>
      <Contact/>
    </div>
  )
}

export default App
