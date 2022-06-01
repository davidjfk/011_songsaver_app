// import logo from './logo.svg';
// import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation'

import Songsaver from './components/Songsaver';
import About from './components/About';
import GooglePlayStore from './components/GooglePlayStore';



const App = () => {
  return (
    <div>
      <Navigation />
      <main>
        <Routes>
          <Route path='/songsaver' element={<Songsaver />} />
          <Route path='/about' element={<About />} />
          <Route path='/googleplaystore' element={<GooglePlayStore />}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
